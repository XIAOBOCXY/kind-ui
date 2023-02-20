import { defineConfig } from "vite";

//配置vite的vue插件@vitejs/plugin-vue
import vue from "@vitejs/plugin-vue";

//配置导出模型类型并确定导出的文件名
const rollupOptions = {
    external: ["vue", "vue-router"],
    output: {
        globals: {
            vue: "Vue",
        },
    },
};

export default defineConfig({
    plugins: [vue()],//添加插件

    // 添加库模式配置,配置导出模型类型并确定导出的文件名
    build: {
        rollupOptions,
        minify: false,
        lib: {
            entry: "./src/entry.ts",
            name: "KindUI",
            fileName: "kind-ui",
            // 导出模块格式
            formats: ["es", "umd", "iife"],
        },
    },
});