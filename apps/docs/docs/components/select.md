---
title: Select 下拉框
nav:
  title: 组件
  order: 1
---

# Select 下拉框

选择下拉框，支持单选、多选和多种尺寸。

## 基础用法

```tsx
import { Select } from '@my-ui-kit/components';

export default () => (
  <>
    <Select type="single" size="small" aria-label="小号下拉框">
      <option value="1">选项一</option>
      <option value="2">选项二</option>
      <option value="3">选项三</option>
    </Select>
    <Select type="multiple" style={{ marginLeft: 8 }} aria-label="多选下拉框">
      <option value="1">选项一</option>
      <option value="2">选项二</option>
    </Select>
  </>
);
```
