<template lang="pug">
  .toggle2
    b-button(@click="exToggle") Alternar

    p(v-if="status") {{ label }}
    p(v-else) Qualquer outra coisa aqui

    strong(
      :class="color"
      :style="css"
    ) {{ text }}
</template>

<script>
export default {
  name: 'Toggle2',

  inject: ['exToggle'],

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

  computed: {
    text() {
      return this.status ? 'Status é true' : 'Outra coisa'
    },

    color() {
      return {
        green: this.status,
        red: !this.status,
      }
    },

    css() {
      return {
        backgroundColor: this.status ? 'red' : 'green',
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.green {
  color: green;
}

.red {
  color: red;
}
</style>
