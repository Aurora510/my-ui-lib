import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('renders its children', () => {
    render(<Button>点击我</Button>);
    expect(screen.getByRole('button', { name: '点击我' })).toBeDefined();
  });

  it('applies the type class', () => {
    render(<Button type="primary">主按钮</Button>);
    const btn = screen.getByRole('button', { name: '主按钮' });
    expect(btn.className).toContain('mk-btn-primary');
  });

  it('applies the size class', () => {
    render(<Button size="large">大按钮</Button>);
    const btn = screen.getByRole('button', { name: '大按钮' });
    expect(btn.className).toContain('mk-btn-large');
  });

  it('is disabled when loading', () => {
    render(<Button loading>加载中</Button>);
    const btn = screen.getByRole('button', { name: '加载中' });
    expect(btn.disabled).toBe(true);
  });
});