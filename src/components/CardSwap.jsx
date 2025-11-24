import React, { Children, cloneElement, forwardRef, isValidElement, useEffect, useMemo, useRef } from 'react';
import PropTypes from 'prop-types';
import gsap from 'gsap';

export const Card = forwardRef(({ customClass, ...rest }, ref) => (
  <div
    ref={ref}
    {...rest}
    className={`absolute top-1/2 left-1/2 rounded-xl border-2 border-black transform-3d will-change-transform backface-hidden ${customClass ?? ''} ${rest.className ?? ''}`.trim()} />
));

Card.displayName = 'Card';
Card.propTypes = {
  customClass: PropTypes.string,
  className: PropTypes.string
};

const makeSlot = (i, distX, distY, total) => ({
  x: i * distX,
  y: -i * distY,
  z: -i * distX * 1.5,
  zIndex: total - i
});

const placeNow = (el, slot, skew) =>
  gsap.set(el, {
    x: slot.x,
    y: slot.y,
    z: slot.z,
    xPercent: -50,
    yPercent: -50,
    skewY: skew,
    transformOrigin: 'center center',
    zIndex: slot.zIndex,
    force3D: true
  });

const CardSwap = ({
  width = 500,
  height = 400,
  cardDistance = 60,
  verticalDistance = 70,
  delay = 5000,
  pauseOnHover = false,
  onCardClick,
  skewAmount = 6,
  easing = 'elastic',
  children
}) => {
  const getEase = () => {
    if (easing === 'elastic') return 'elastic.out(0.6,0.9)';
    if (easing === 'power2.inOut') return 'power2.inOut';
    return 'power1.inOut';
  };

  const config = {
    ease: getEase(),
    durDrop: 0.6,
    durMove: 0.6,
    durReturn: 0.6,
    promoteOverlap: 0.5,
    returnDelay: 0.1
  };

  const childArr = useMemo(() => Children.toArray(children), [children]);
  const refs = useMemo(
    () => childArr.map(() => React.createRef()),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [childArr.length]
  );

  const order = useRef(Array.from({ length: childArr.length }, (_, i) => i));

  const tlRef = useRef(null);
  const intervalRef = useRef();
  const container = useRef(null);

  useEffect(() => {
    const total = refs.length;
    for (const [i, ref] of refs.entries()) {
      placeNow(ref.current, makeSlot(i, cardDistance, verticalDistance, total), skewAmount);
    }

    const swap = () => {
      if (order.current.length < 2) return;

      const [front, ...rest] = order.current;
      const elFront = refs[front].current;
      const tl = gsap.timeline();
      tlRef.current = tl;

      tl.to(elFront, {
        y: '+=500',
        duration: config.durDrop,
        ease: config.ease
      });

      tl.addLabel('promote', `-=${config.durDrop * config.promoteOverlap}`);
      for (const [i, idx] of rest.entries()) {
        const el = refs[idx].current;
        const slot = makeSlot(i, cardDistance, verticalDistance, refs.length);
        tl.set(el, { zIndex: slot.zIndex }, 'promote');
        tl.to(el, {
          x: slot.x,
          y: slot.y,
          z: slot.z,
          duration: config.durMove,
          ease: config.ease
        }, `promote+=${i * 0.15}`);
      }

      const backSlot = makeSlot(refs.length - 1, cardDistance, verticalDistance, refs.length);
      tl.addLabel('return', `promote+=${config.durMove * config.returnDelay}`);
      tl.call(() => {
        gsap.set(elFront, { zIndex: backSlot.zIndex });
      }, undefined, 'return');
      tl.to(elFront, {
        x: backSlot.x,
        y: backSlot.y,
        z: backSlot.z,
        duration: config.durReturn,
        ease: config.ease
      }, 'return');

      tl.call(() => {
        order.current = [...rest, front];
      });
    };

    swap();
    intervalRef.current = window.setInterval(swap, delay);

    if (pauseOnHover) {
      const node = container.current;
      const pause = () => {
        tlRef.current?.pause();
        clearInterval(intervalRef.current);
      };
      const resume = () => {
        tlRef.current?.play();
        intervalRef.current = globalThis.setInterval(swap, delay);
      };
      node.addEventListener('mouseenter', pause);
      node.addEventListener('mouseleave', resume);
      return () => {
        node.removeEventListener('mouseenter', pause);
        node.removeEventListener('mouseleave', resume);
        clearInterval(intervalRef.current);
      };
    }
    return () => clearInterval(intervalRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardDistance, verticalDistance, delay, pauseOnHover, skewAmount, easing]);

  const rendered = childArr.map((child, index) =>
    isValidElement(child)
      ? cloneElement(child, {
          key: `card-${child.key || index}`,
          ref: refs[index],
          style: { width, height, ...(child.props.style || {}) },
          onClick: e => {
            child.props.onClick?.(e);
            onCardClick?.(index);
          }
        })
      : child);

  return (
    <div
      ref={container}
      className="absolute bottom-0 right-0 transform translate-x-[5%] translate-y-[20%] origin-bottom-right perspective-[900px] overflow-visible max-[768px]:translate-x-[25%] max-[768px]:translate-y-[25%] max-[768px]:scale-[0.75] max-[480px]:translate-x-[25%] max-[480px]:translate-y-[25%] max-[480px]:scale-[0.55]"
      style={{ width, height }}>
      {rendered}
    </div>
  );
};

CardSwap.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  cardDistance: PropTypes.number,
  verticalDistance: PropTypes.number,
  delay: PropTypes.number,
  pauseOnHover: PropTypes.bool,
  onCardClick: PropTypes.func,
  skewAmount: PropTypes.number,
  easing: PropTypes.oneOf(['elastic', 'power2.inOut', 'power1.inOut']),
  children: PropTypes.node.isRequired
};

CardSwap.defaultProps = {
  width: 500,
  height: 400,
  cardDistance: 60,
  verticalDistance: 70,
  delay: 5000,
  pauseOnHover: false,
  skewAmount: 6,
  easing: 'elastic'
};

export default CardSwap;
