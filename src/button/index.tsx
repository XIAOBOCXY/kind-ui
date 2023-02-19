import { defineComponent, PropType, toRefs } from "vue";
import "uno.css";

export type IColor =
    "white"
    | 'black'
    | 'gray'
    | 'red'
    | 'yellow'
    | 'green'
    | 'blue'
    | 'indigo'
    | 'purple';
export type ISize =
    "small"
    | "medium"
    | "large";

export const props = {
    //是否朴素按钮
    plain: {
        type: Boolean,
        default: false,
    },
    //颜色
    color: {
        type: String as PropType<IColor>,
        default: 'blue' // 设定默认颜⾊
    },
    //尺寸
    size: {
        type: String as PropType<ISize>,
        default: 'medium'
    },
    //是否圆角按钮
    round: {
        type: Boolean,
        default: false,
    },
    //图标类名
    icon: {
        type: String,
        default: '',
    },
    //是否圆形
    circle: {
        type: Boolean,
        default: false,
    }
} as const;
export default defineComponent({
    name: "SButton",
    props,
    setup(props, { slots }) {
        const size = {
            small: {
                x: "2",
                y: "1",
                text: "sm",
            },
            medium: {
                x: "3",
                y: "2",
                text: "base",
            },
            large: {
                x: "5",
                y: "2",
                text: "lg",
            },
        }
        return () => <button
            class={`
            py-${size[props.size].y}
            px-${size[props.size].x}
            ${props.round || props.circle ? "rounded-full" : "rounded-xl"}
            ${props.circle ? "w-12 h-12  inline-flex items-center justify-center" : ""}
            ${props.color === 'white' ? "bg-white" : "bg-" + props.color + "-500"}
            ${props.color === 'white' ? "border-black-500" : "border-" + props.color + "-500"}
            ${props.plain ? "bg-opacity-20" : "bg-opacity-100"}
            ${props.color === 'white' && props.plain ? "text-black-500 hover:text-blue-500 hover:border-blue-500" : ""}
            ${props.color != 'white' && props.plain ? "text-" + props.color + "-500 hover:text-white" : ""}
            ${props.color === 'white' && !props.plain ? "text-black-500 hover:text-white hover:border-blue-500 hover:bg-blue-400" : ""}
            ${props.color != 'white' && !props.plain ? "text-white hover:bg-" + props.color + "-400" : ""}
            hover:bg-opacity-60
            cursor-pointer
            border-solid
            text-${size[props.size].text}
            transition duration-300 ease-in-out transform hover:scale-105
            m-1
        `}
        >
            {props.icon !== "" ? <i class={`i-ic-baseline-${props.icon} p-3`}></i> : ""}
            {slots.default ? slots.default() : ''}
        </button>
    }
});

//unocss.ts安全序列