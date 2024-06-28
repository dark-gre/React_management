import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
// import styleImport,{AntdResolve} from 'vite-plugin-style-import'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    //css按需引入插件的时候，配置项。使用此插件的时候，会出现和antd组件有冲突，所以注释掉了。
    // styleImport({
    //   resolves:[
    //     AntdResolve()
    //   ]
    // })
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
