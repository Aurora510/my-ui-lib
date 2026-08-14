export const colors = {
  primary: '#534ab7',
  primaryHover: '#6a63c4',
  danger: '#e24b4a',
  success: '#1d9e75',
  warning: '#ef9f27',
  text: '#333333',
  textSecondary: '#666666',
  border: '#d9d9d9',
  white: '#ffffff',
} as const;

export const spacing = {
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
} as const;

export const radius = {
  sm: '4px',
  md: '6px',
  lg: '12px',
} as const;

export type Colors = typeof colors;
export type Spacing = typeof spacing;
export type Radius = typeof radius;