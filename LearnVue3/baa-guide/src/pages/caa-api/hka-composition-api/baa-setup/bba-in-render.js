import { h, ref } from "vue";

export default {
  name: "bba-in-render",
  setup() {
    const count = ref(1);
    function addCount() {
      count.value++;
    }

    // setup 可以返回一个渲染函数。渲染函数可以使用当前setup作用域中的响应式数据
    return () =>
      h("fieldset", [
        h("h3", ["在渲染函数/jsx中使用"]),
        h(
          "button",
          {
            onClick: addCount
          },
          [count.value]
        ),
      ]);
  },
};
