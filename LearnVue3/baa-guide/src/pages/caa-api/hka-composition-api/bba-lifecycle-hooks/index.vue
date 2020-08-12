<template>
  <div>
    <fieldset>
      <div>在 setup 期间可以使用 onXXX 调用声明周期钩子</div>
      <div>组件实例上下文也是在生命周期钩子同步执行期间设置的，因此，在卸载组件时，在生命周期钩子内部同步创建的侦听器和计算状态也将自动删除。</div>
    </fieldset>
    <fieldset>
      <div>与原来的钩子对比：</div>
      <div>beforeCreate -> 使用 setup()</div>
      <div>created -> 使用 setup()</div>
      <div>beforeMount -> onBeforeMount</div>
      <div>mounted -> onMounted</div>
      <div>beforeUpdate -> onBeforeUpdate</div>
      <div>updated -> onUpdated</div>
      <div>beforeDestroy -> onBeforeUnmount</div>
      <div>destroyed -> onUnmounted</div>
      <div>errorCaptured -> onErrorCaptured</div>
      <fieldset>
        <div>新增两个调试钩子：onRenderTracked，onRenderTriggered。它们接受DebuggerEvent，类似watchEffect 参数选项中的 onTrack 和 onTrigger。</div>
        <div>onRenderTracked，在一个 reactive 对象属性或一个 ref 作为依赖被追踪时被调用</div>
        <div>onRenderTriggered，在依赖项变更导致副作用被触发时调用</div>
      </fieldset>
    </fieldset>
    <fieldset>
      <input type="radio" v-model="one.isShow" :value="true" />
      <input type="radio" v-model="one.isShow" :value="false" />
      <baa-test v-if="one.isShow"></baa-test>
    </fieldset>
  </div>
</template>

<script>
import BaaTest from "./baa-test.vue";
import { reactive } from "vue";

export default {
  name: "bba-lifecycle-hooks",
  components: {
    BaaTest,
  },
  setup() {
    const one = reactive({
      isShow: true,
    });
    function changeOneIsShow(isShow) {
      one.isShow = isShow;
    }
    return {
      one,
      changeOneIsShow,
    };
  },
};
</script>

<style>
</style>
