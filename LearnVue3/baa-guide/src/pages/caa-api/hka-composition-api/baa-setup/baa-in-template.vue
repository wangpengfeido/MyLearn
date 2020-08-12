<template>
  <fieldset>
    <h3>在模版中使用</h3>
    <div>
      <span>ref:</span>
      <button @click="addCount1()">{{count1}}</button>
      <div>注意：ref在模版中使用时会自动解开</div>
    </div>
    <div>
      <span>reactive:</span>
      <button @click="addCount2()">{{count2State.count2}}</button>
    </div>
  </fieldset>
</template>

<script>
import { ref, reactive } from "vue";

export default {
  name: "aaa-in-template",
  setup() {
    const count1 = ref(1);
    function addCount1() {
      count1.value++;
    }

    const count2State = reactive({
      count2: 1,
    });
    function addCount2() {
      count2State.count2++;
    }

    // setup 可以返回一个对象，对象的属性将会被合并到组件模板的渲染上下文
    return {
      count1,
      addCount1,
      count2State,
      addCount2,
    };
  },
};
</script>

<style>
</style>
