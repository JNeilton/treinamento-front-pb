<template lang="pug">
  #app
    .container
      b-nav
        b-nav-item(to="/") Home
        b-nav-item(to="/about") About
        b-nav-item(to="/form") Form

      router-view
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="scss">
</style>
