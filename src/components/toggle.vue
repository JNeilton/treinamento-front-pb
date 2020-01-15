<template lang="pug">
  .toggle
    b-button(@click="toggle") Alternar

    p(v-if="status") {{ label }}
    p(v-else) Qualquer outra coisa aqui
</template>

<script>
export default {
  name: 'Toggle',

  props: {
    status: {
      type: Boolean,
      default: false,
    },

    label: {
      type: String,
      default: null,
    },
  },

  methods: {
    toggle() {
      this.$emit('evento')
    },
  },
}
</script>
