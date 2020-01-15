<template lang="pug">
  #app
    .container
      b-nav
        b-nav-item(to="/") Home
        b-nav-item(to="/about") About
        b-nav-item(to="/form") Form
        b-nav-item(to="/vuex") Vuex

      router-view
</template>

<script>
export default {
  name: 'App',
}
</script>
