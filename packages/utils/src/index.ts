/**
 * 拼接 className，自动过滤 falsy 值（false / null / undefined）
 *
 * @example
 * cn('btn', isActive && 'btn-active', className)
 */
export function cn(
  ...classes: Array<string | false | null | undefined>
): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * 从对象中移除指定属性，返回新对象（不修改原对象）
 *
 * @example
 * omit({ a: 1, b: 2 }, ['b']) // { a: 1 }
 */
export function omit<T extends object, K extends keyof T>(
  obj: T,
  keys: K[],
): Omit<T, K> {
  const result = { ...obj };
  keys.forEach((k) => {
    delete result[k];
  });
  return result;
}