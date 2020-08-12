<template>
  <div>
    <fieldset>
      <h3>动态添加对象属性</h3>
      <div>a:{{one.a}}</div>
      <div>b:{{one.b}}</div>
      <div>
        <button @click="addOneB()">添加属性b</button>
      </div>
    </fieldset>
    <fieldset>
      <ul>
        <li v-for="(item,index) in two" :key="index">{{item}}</li>
        <div>
          <button @click="addArrZero()">增加数组的第0个元素</button>
        </div>
        <div>
          <button @click="reduceArrLength()">直接减少数组长度</button>
        </div>
      </ul>
    </fieldset>
  </div>
</template>

<script>
import { reactive } from "vue";

export default {
  name: "baa-proxy-feature",
  setup() {
    const one = reactive({
      a: "aaa",
    });
    function addOneB() {
      one.b = "bbb";
    }

    const two = reactive([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    function addArrZero() {
      two[0]++;
    }
    function reduceArrLength() {
      two.length--;
    }

    return {
      one,
      addOneB,
      two,
      addArrZero,
      reduceArrLength,
    };
  },
};
</script>

<style>
</style>
