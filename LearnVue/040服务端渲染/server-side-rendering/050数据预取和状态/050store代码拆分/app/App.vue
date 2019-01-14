<template>
    <div>
        <div>this is app</div>
        <div>
            <router-link to="/root/one/23">/root/one/23</router-link>
            <router-link to="/root/one/24">/root/one/24</router-link>
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