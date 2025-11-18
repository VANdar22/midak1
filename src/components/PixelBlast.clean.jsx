import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const SHAPE_MAP = {
  square: 0,
  circle: 1,
  triangle: 2,
  diamond: 3
};

const VERTEX_SRC = `
void main() {
  gl_Position = vec4(position, 1.0);
}
`;

const FRAGMENT_SRC = `
precision highp float;

uniform vec3  uColor;
uniform vec2  uResolution;
uniform float uTime;
uniform float uPixelSize;
uniform float uScale;
uniform float uDensity;
uniform float uPixelJitter;
uniform int   uShapeType;
uniform float uEdgeFade;

const int SHAPE_SQUARE   = 0;
const int SHAPE_CIRCLE   = 1;
const int SHAPE_TRIANGLE = 2;
const int SHAPE_DIAMOND  = 3;

float Bayer2(vec2 a) {
  a = floor(a);
  return fract(a.x / 2. + a.y * a.y * .75);
}
#define Bayer4(a) (Bayer2(.5*(a))*0.25 + Bayer2(a))
#define Bayer8(a) (Bayer4(.5*(a))*0.25 + Bayer2(a))

void main() {
  float pixelSize = uPixelSize;
  vec2 fragCoord = gl_FragCoord.xy - uResolution * .5;
  float aspectRatio = uResolution.x / uResolution.y;

  vec2 pixelId = floor(fragCoord / pixelSize);
  vec2 pixelUV = fract(fragCoord / pixelSize);

  float cellPixelSize = 8.0 * pixelSize;
  vec2 cellId = floor(fragCoord / cellPixelSize);
  vec2 cellCoord = cellId * cellPixelSize;
  vec2 uv = cellCoord / uResolution * vec2(aspectRatio, 1.0);

  // Generate some base noise
  float n = fract(sin(dot(uv + uTime * 0.1, vec2(12.9898, 78.233))) * 43758.5453);
  float base = n * 0.5 - 0.65 + (uDensity - 0.5) * 0.3;

  float bayer = Bayer8(fragCoord / uPixelSize) - 0.5;
  float bw = step(0.5, base + bayer);

  // Apply shape mask
  float M = 0.0;
  if (uShapeType == SHAPE_CIRCLE) {
    float r = 0.5;
    float d = length(pixelUV - 0.5) - r;
    float aa = 0.5 * fwidth(d);
    M = bw * (1.0 - smoothstep(-aa, aa, d * 2.0));
  } else if (uShapeType == SHAPE_TRIANGLE) {
    vec2 p = pixelUV;
    bool flip = mod(pixelId.x + pixelId.y, 2.0) > 0.5;
    if (flip) p.x = 1.0 - p.x;
    float d = p.y - 0.5 * (1.0 - p.x);
    float aa = fwidth(d);
    M = bw * clamp(0.5 - d/aa, 0.0, 1.0);
  } else if (uShapeType == SHAPE_DIAMOND) {
    float r = 0.5;
    float d = abs(pixelUV.x - 0.5) + abs(pixelUV.y - 0.5) - r;
    float aa = 0.5 * fwidth(d);
    M = bw * (1.0 - smoothstep(-aa, aa, d * 2.0));
  } else { // SQUARE
    M = bw;
  }

  if (uEdgeFade > 0.0) {
    vec2 norm = gl_FragCoord.xy / uResolution;
    float edge = min(min(norm.x, norm.y), min(1.0 - norm.x, 1.0 - norm.y));
    float fade = smoothstep(0.0, uEdgeFade, edge);
    M *= fade;
  }

  gl_FragColor = vec4(uColor, M);
}
`;

const PixelBlast = ({
  variant = 'square',
  pixelSize = 3,
  color = '#B19EEF',
  className,
  style,
  antialias = true,
  patternScale = 2,
  patternDensity = 1,
  pixelSizeJitter = 0,
  autoPauseOffscreen = true,
  speed = 0.5,
  transparent = true,
  edgeFade = 0.5,
}) => {
  const containerRef = useRef(null);
  const threeRef = useRef(null);
  const speedRef = useRef(speed);
  const visibilityRef = useRef({ visible: true });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    speedRef.current = speed;

    if (!threeRef.current) {
      // Initialize Three.js
      const renderer = new THREE.WebGLRenderer({
        antialias,
        alpha: transparent,
        powerPreference: 'high-performance'
      });
      
      renderer.setPixelRatio(window.devicePixelRatio);
      if (transparent) {
        renderer.setClearColor(0x000000, 0);
      } else {
        renderer.setClearColor(0x000000, 1);
      }
      
      container.appendChild(renderer.domElement);
      
      const scene = new THREE.Scene();
      const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
      
      const uniforms = {
        uTime: { value: 0 },
        uResolution: { value: new THREE.Vector2() },
        uColor: { value: new THREE.Color(color) },
        uPixelSize: { value: pixelSize },
        uScale: { value: patternScale },
        uDensity: { value: patternDensity },
        uPixelJitter: { value: pixelSizeJitter },
        uShapeType: { value: SHAPE_MAP[variant] ?? 0 },
        uEdgeFade: { value: edgeFade }
      };
      
      const material = new THREE.ShaderMaterial({
        vertexShader: VERTEX_SRC,
        fragmentShader: FRAGMENT_SRC,
        uniforms,
        transparent: true,
        depthTest: false,
        depthWrite: false
      });
      
      const geometry = new THREE.BufferGeometry();
      const vertices = new Float32Array([-1, -1, 0, 3, -1, 0, -1, 3, 0]);
      geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
      
      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);
      
      const clock = new THREE.Clock();
      
      const setSize = () => {
        const width = container.clientWidth;
        const height = container.clientHeight;
        
        renderer.setSize(width, height, false);
        uniforms.uResolution.value.set(renderer.domElement.width, renderer.domElement.height);
        uniforms.uPixelSize.value = pixelSize * renderer.getPixelRatio();
      };
      
      setSize();
      
      const resizeObserver = new ResizeObserver(() => {
        setSize();
      });
      
      resizeObserver.observe(container);
      
      let rafId;
      
      const animate = () => {
        if (autoPauseOffscreen && !visibilityRef.current.visible) {
          rafId = requestAnimationFrame(animate);
          return;
        }
        
        uniforms.uTime.value = clock.getElapsedTime() * speedRef.current;
        renderer.render(scene, camera);
        rafId = requestAnimationFrame(animate);
      };
      
      rafId = requestAnimationFrame(animate);
      
      // Handle visibility changes
      const handleVisibilityChange = () => {
        visibilityRef.current.visible = !document.hidden;
      };
      
      document.addEventListener('visibilitychange', handleVisibilityChange);
      
      threeRef.current = {
        renderer,
        scene,
        camera,
        material,
        geometry,
        mesh,
        clock,
        rafId,
        resizeObserver,
        handleVisibilityChange,
        uniforms
      };
      
      return () => {
        cancelAnimationFrame(rafId);
        resizeObserver.disconnect();
        document.removeEventListener('visibilitychange', handleVisibilityChange);
        
        if (container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }
        
        geometry.dispose();
        material.dispose();
        renderer.dispose();
        
        threeRef.current = null;
      };
    } else {
      // Update existing instance
      const t = threeRef.current;
      t.uniforms.uColor.value.set(color);
      t.uniforms.uPixelSize.value = pixelSize * t.renderer.getPixelRatio();
      t.uniforms.uScale.value = patternScale;
      t.uniforms.uDensity.value = patternDensity;
      t.uniforms.uPixelJitter.value = pixelSizeJitter;
      t.uniforms.uShapeType.value = SHAPE_MAP[variant] ?? 0;
      t.uniforms.uEdgeFade.value = edgeFade;
      
      if (transparent) {
        t.renderer.setClearColor(0x000000, 0);
      } else {
        t.renderer.setClearColor(0x000000, 1);
      }
    }
  }, [
    antialias,
    pixelSize,
    color,
    variant,
    patternScale,
    patternDensity,
    pixelSizeJitter,
    edgeFade,
    transparent,
    autoPauseOffscreen,
    speed
  ]);
  
  useEffect(() => {
    return () => {
      if (threeRef.current) {
        const t = threeRef.current;
        cancelAnimationFrame(t.rafId);
        t.resizeObserver.disconnect();
        document.removeEventListener('visibilitychange', t.handleVisibilityChange);
        
        if (t.renderer.domElement.parentElement === containerRef.current) {
          containerRef.current.removeChild(t.renderer.domElement);
        }
        
        t.geometry.dispose();
        t.material.dispose();
        t.renderer.dispose();
        
        threeRef.current = null;
      }
    };
  }, []);
  
  return (
    <div
      ref={containerRef}
      className={`w-full h-full relative overflow-hidden ${className || ''}`}
      style={style}
      aria-label="PixelBlast interactive background"
    />
  );
};

export default PixelBlast;
