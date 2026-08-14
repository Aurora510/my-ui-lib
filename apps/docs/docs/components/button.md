---
title: Button 按钮
nav:
  title: 组件
  order: 1
---

# Button 按钮

常用的操作按钮，支持多种类型、尺寸与加载状态。

## 基础用法

```tsx
import { Button } from '@my-ui-kit/components';

export default () => (
  <>
    <Button type="primary">主按钮</Button>
    <Button type="default" style={{ marginLeft: 8 }}>
      默认按钮
    </Button>
    <Button type="danger" style={{ marginLeft: 8 }}>
      危险按钮
    </Button>
  </>
);
```

## 不同尺寸

```tsx
import { Button } from '@my-ui-kit/components';

export default () => (
  <>
    <Button type="primary" size="small">
      小
    </Button>
    <Button type="primary" size="middle" style={{ marginLeft: 8 }}>
      中
    </Button>
    <Button type="primary" size="large" style={{ marginLeft: 8 }}>
      大
    </Button>
  </>
);
```

## 加载状态

```tsx
import { Button } from '@my-ui-kit/components';

export default () => <Button type="primary" loading>加载中</Button>;
```

## 禁用状态

```tsx
import { Button } from '@my-ui-kit/components';

export default () => (
  <>
    <Button type="primary" disabled>
      禁用
    </Button>
    <Button type="default" disabled style={{ marginLeft: 8 }}>
      禁用
    </Button>
  </>
);
```

## API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 按钮类型 | `primary` \| `default` \| `danger` | `default` |
| size | 按钮尺寸 | `small` \| `middle` \| `large` | `middle` |
| loading | 是否加载中 | `boolean` | `false` |
| disabled | 是否禁用 | `boolean` | `false` |
| className | 自定义类名 | `string` | - |
| onClick | 点击事件回调 | `(e: MouseEvent) => void` | - |

> 此外继承所有原生 `<button>` 元素属性。
