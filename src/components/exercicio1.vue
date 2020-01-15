<template lang="pug">
  .exercicio1
    h2 {{ label }}

    ul
      li(v-for="item in list")
        b-form-checkbox(
          :value="item.value"
        ) {{ item.text }}

    p {{ count }}

    b-button(@click="increment") Incrementar
    b-button(@click="decrement") Decrementar

    hr
    toggle(
      :status="statusToggle"
      :label="label"
      @evento="toggle"
    )

    hr
    toggle2(
      :status="statusToggle"
      :label="label"
    )
</template>

<script>
import Toggle from './toggle.vue'
import Toggle2 from './toggle2.vue'

export default {
  name: 'Exercicio1',

  components: {
    Toggle,
    Toggle2,
  },

  provide() {
    return {
      exToggle: this.toggle,
    }
  },

  data: () => ({
    status: false,
    label: 'Lorem ispum',
    count: 0,
    list: [
      { text: 'Item 1', value: 1 },
      { text: 'Item 2', value: 2 },
      { text: 'Item 3', value: 3 },
    ],
  }),

  computed: {
    statusToggle: {
      get() {
        return this.status
      },
      set(val) {
        this.status = val
      },
    },
  },

  watch: {
    statusToggle(val) {
      console.log('statusToggle mudou para:', val)
    },
  },

  methods: {
    increment() {
      this.count += 1
    },

    decrement() {
      this.count -= 1
    },

    toggle() {
      const status = !this.status

      this.statusToggle = status
    },
  },
}
</script>
