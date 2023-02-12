import { defineConfig } from "vite";

//配置vite的vue插件@vitejs/plugin-vue
import vue from "@vitejs/plugin-vue";
//配置vite的JSX语法转译工具插件@vitejs/plugin-vue-jsx
import vueJsx from '@vitejs/plugin-vue-jsx';

export default defineConfig({
    plugins: [vue(), vueJsx()],//添加插件
});


