//编写一个button组件
import { defineComponent, h } from "vue";
export default defineComponent({
    name: "SButton",
    render() {//使用render函数定义组件的模板
        return h("button", null, "MyButton");//h(HTML标签名,HTML属性/方法等,子元素/渲染内容/插槽)
    },
});