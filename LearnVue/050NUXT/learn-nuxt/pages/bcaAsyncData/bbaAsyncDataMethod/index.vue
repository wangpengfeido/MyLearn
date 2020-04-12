<template>
  <div>
    <div>this is async data</div>
    <div>{{ title }}</div>
  </div>
</template>

<script>
function fetchData() {
  return new Promise((resolve) => {
    // eslint-ignore-next-line
    setTimeout(() => {
      resolve({
        title: 'hello world'
      })
    }, 2000)
  })
}

export default {
  name: 'BbaAsyncDataMethod',
  asyncData() {
    return fetchData()
  }
}
</script>

<style></style>
