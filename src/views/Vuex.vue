<template lang="pug">
  .vuex
    h2 Vuex Demo

    pre
      code {{ getUsers }}
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'VuexDemo',

  computed: {
    ...mapGetters('vuexDemo', ['getUsers']),
  },

  mounted() {
    this.requestUsers()
  },

  methods: {
    ...mapActions('vuexDemo', ['requestUsers']),
  },
}
</script>
