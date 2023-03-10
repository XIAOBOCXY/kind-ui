import Theme from 'vitepress/dist/client/theme-default/index.js'
import KindUI from '../../../src/entry'

// 主题样式
import 'vitepress-theme-demoblock/theme/styles/index.css'
// 插件的组件，主要是demo组件
import Demo from 'vitepress-theme-demoblock/components/Demo.vue'
import DemoBlock from 'vitepress-theme-demoblock/components/DemoBlock.vue'

export default {
    ...Theme, // 默认主题
    enhanceApp({ app }) {
        app.use(KindUI)
        app.component('Demo', Demo)
        app.component('DemoBlock', DemoBlock)
    },
}