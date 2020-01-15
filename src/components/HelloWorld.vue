<template lang="pug">
  .hello
    h1 {{ msg }}

    p
      | For a guide and recipes on how to configure / customize this project,
      br
      a(
        href="https://cli.vuejs.org"
        target="_blank"
        rel="noopener"
      ) vue-cli documentation

    h3 Installed CLI Plugins

    b-nav
      b-nav-item(
        target="_blank"
        href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel"
      ) babel

      b-nav-item(
        target="_blank"
        href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa"
      ) pwa

      b-nav-item(
        href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router"
        target="_blank"
      ) router

      b-nav-item(
        href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex"
        target="_blank"
      ) vuex

      b-nav-item(
        href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint"
        target="_blank"
      ) eslint

      b-nav-item(
        href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-mocha"
        target="_blank"
      ) unit-mocha
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      default: null,
    },
  },
}
</script>

<style scoped lang="scss">
</style>
