// Accent color - Burgundy/Maroon
const BASE_ACCENT = '#800020';

// Accent color variations
export const accentColors = {
  // Main accent color
  DEFAULT: BASE_ACCENT,
  
  // Lighter shades
  lightest: '#F5E6E9',
  lighter: '#E5C6CC',
  light: '#B38F99',
  
  // Main color
  main: BASE_ACCENT,
  
  // Darker shades
  dark: '#66001A',
  darker: '#4D0014',
  darkest: '#33000D',
  
  // State colors
  hover: '#990026',
  active: '#66001A',
  disabled: '#CCB3B9',
  
  // Text on accent
  text: '#FFFFFF',
  textLight: 'rgba(255, 255, 255, 0.7)',
  textDisabled: 'rgba(255, 255, 255, 0.5)',
  
  // Opacity variants
  alpha10: 'rgba(128, 0, 32, 0.1)',
  alpha20: 'rgba(128, 0, 32, 0.2)',
  alpha50: 'rgba(128, 0, 32, 0.5)',
  alpha80: 'rgba(128, 0, 32, 0.8)'
} as const;

// For backward compatibility
export const BURGUNDY = BASE_ACCENT;
