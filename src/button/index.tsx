import { defineComponent, PropType, toRefs } from "vue";
import "uno.css";

export type IColor =
    'black'
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
        default: 'large'
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
                y: "1.5",
                text: "base",
            },
            large: {
                x: "4",
                y: "2",
                text: "lg",
            },
        }
        return () => <button
            class={`
          ${props.plain ? "text-" + props.color + "-500" : "text-" + "white"}
          py-${size[props.size].y}
          px-${size[props.size].x}
          ${props.round ? "rounded-full" : "rounded-lg"}
          bg-${props.color}-500
          ${props.plain ? "bg-opacity-20" : "bg-opacity-100"}
          hover:bg-${props.color}-400
          hover:bg-opacity-60
          border-${props.color}-500
          cursor-pointer
          border-solid
          text-${props.plain ? props.color + "-500" : "white-500"}
          text-${size[props.size].text}
          hover:text-white
          transition duration-300 ease-in-out transform hover:scale-105
          mx-1
          `}
        >
            {props.icon !== "" ? <i class={`i-ic-baseline-${props.icon} p-3`}></i> : ""}
            {slots.default ? slots.default() : ''}
        </button>
    }
});

//unocss.ts安全序列
//圆形按钮 circle