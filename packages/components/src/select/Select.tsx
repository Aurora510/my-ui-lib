import type { SelectHTMLAttributes } from 'react';
import { cn } from '@my-ui-kit/utils';
import './select.less';

export interface SelectProps
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'type' | 'size'> {
  /** 选择模式：单选 / 多选 */
  type?: 'single' | 'multiple';
  /** 尺寸 */
  size?: 'small' | 'middle' | 'large';
}

export function Select({
                         type = 'single',
                         size = 'middle',
                         disabled,
                         className,
                         children,
                         ...rest
                       }: SelectProps) {
  const classes = cn(
    'mk-sel',
    `mk-sel-${type}`,
    `mk-sel-${size}`,
    className,
  );

  return (
    <select className={classes} disabled={disabled} {...rest}>
      {children}
    </select>
  );
}

export default Select;
