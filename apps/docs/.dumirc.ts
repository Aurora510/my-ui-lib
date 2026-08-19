import { defineConfig } from 'dumi';

export default defineConfig({
  // GitHub Pages 部署在子路径 /my-ui-lib/ 下，必须设置 base + publicPath，
  // 否则路由和静态资源路径找不到（白屏/404）
  base: '/my-ui-lib/',
  publicPath: '/my-ui-lib/',
  resolve: {
    docDirs: ['docs'],
  },
  themeConfig: {
    name: 'my-ui-kit',
  },
});