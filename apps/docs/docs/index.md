---
hero:
  title: my-ui-kit
  description: 基于 React 18 + TypeScript 的前端 UI 组件库

features:
  - title: 开箱即用
    emoji: 🚀
    description: 基于 React 18 + TypeScript，内置常用组件，支持按需引入
  - title: Monorepo 架构
    emoji: 📦
    description: pnpm + Turborepo 管理，组件 / 主题 / 工具分包独立发布
  - title: 主题可定制
    emoji: 🎨
    description: 设计令牌驱动，支持自定义主题与深浅色切换
---

## 快速开始

安装组件库：

```bash
pnpm add @my-ui-kit/components
```

使用组件：

```tsx
import { Button } from '@my-ui-kit/components';

export default () => <Button type="primary">开始使用</Button>;
```
