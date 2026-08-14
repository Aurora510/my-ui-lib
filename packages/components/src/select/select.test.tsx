import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Select } from './Select';

describe('Select', () => {
  it('renders its children', () => {
    render(
      <Select aria-label="下拉框">
        <option value="1">选项一</option>
        <option value="2">选项二</option>
      </Select>,
    );
    expect(screen.getByRole('combobox', { name: '下拉框' })).toBeDefined();
  });

  it('applies the size class', () => {
    render(
      <Select size="small" aria-label="小号下拉框">
        <option value="1">选项一</option>
      </Select>,
    );
    const sel = screen.getByRole('combobox', { name: '小号下拉框' });
    expect(sel.className).toContain('mk-sel-small');
  });
});
