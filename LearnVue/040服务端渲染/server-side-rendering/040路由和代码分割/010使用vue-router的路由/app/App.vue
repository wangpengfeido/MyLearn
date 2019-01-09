<template>
    <div>
        <div>this is app</div>
        <div>
            <router-link to="/root/one">/root/one</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
  export default {
    name: "App",
  }
</script>

<style scoped>

</style>