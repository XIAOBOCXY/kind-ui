import { defineConfig } from "vite";

//配置vite的vue插件@vitejs/plugin-vue
import vue from "@vitejs/plugin-vue";
//配置vite的JSX语法转译工具插件@vitejs/plugin-vue-jsx
import vueJsx from '@vitejs/plugin-vue-jsx';
//在 Vite 中添加 UnoCSS 插件
//import { presetUno, presetAttributify, presetIcons } from "unocss";
//import Unocss from "unocss/vite";
//由于需要定制安全列表，引入重构的unocss配置
import Unocss from "./config/unocss";

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
    resolve: {
        alias: {
            vue: 'vue/dist/vue.esm-bundler.js',//在vite配置文件中配置别名resolve.
            //组件提供 template 选项，但是在Vue的这个构建中不支持运行时编译
            //用构建工具的情况下，默认使用的是 vue.runtime.esm-bundler.js 这个仅运行时版本，不能处理 template 选项是字符串的情况
            //template 选项是字符串的情况要使用包含运行时编译器的版本 vue.esm-bundler.js
        },
    },
    plugins: [
        vue(),
        vueJsx(),
        // Unocss({
        //     presets: [presetUno(), presetAttributify(), presetIcons()],
        // })
        ////重构后的unocss配置
        Unocss(),
    ],//添加插件

    // 添加库模式配置,配置导出模型类型并确定导出的文件名
    build: {
        rollupOptions,
        minify: false,
        lib: {
            entry: "./src/entry.ts",
            name: "SmartyUI",
            fileName: "smarty-ui",
            // 导出模块格式
            formats: ["es", "umd", "iife"],
        },
        cssCodeSplit: true,//决定在编译的时候是否要独立输出 css,Build 时单独导出 CSS
    },
});


