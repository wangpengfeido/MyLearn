<template>
  <div>
    <div>this is ValidateParam</div>
    <div>param:{{ $route.params.validateParam }}</div>
  </div>
</template>

<script>
export default {
  // 校验参数
  // 返回false将显示404或500页面
  validate({ params }) {
    return parseInt(params.validateParam) >= 100
  },
  name: 'ValidateParam'
}
</script>

<style></style>
