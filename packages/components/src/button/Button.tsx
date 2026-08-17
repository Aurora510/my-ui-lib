import type { ButtonHTMLAttributes } from 'react';
import { cn } from '@my-ui-kit/utils';
import './button.less';
debugger;

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  /** 按钮类型 */
  type?: 'primary' | 'default' | 'danger';
  /** 按钮尺寸 */
  size?: 'small' | 'middle' | 'large';
  /** 是否处于加载状态 */
  loading?: boolean;
}

export function Button({
                         type = 'default',
                         size = 'middle',
                         loading = false,
                         disabled,
                         className,
                         children,
                         ...rest
                       }: ButtonProps) {
  const classes = cn(
    'mk-btn',
    `mk-btn-${type}`,
    `mk-btn-${size}`,
    loading && 'mk-btn-loading',
    className,
  );

  return (
    <button
      type="button"
      className={classes}
      disabled={disabled || loading}
      {...rest}
    >
      {loading && <span className="mk-btn-spinner" />}
      <span className="mk-btn-content">{children}</span>
    </button>
  );
}

export default Button;