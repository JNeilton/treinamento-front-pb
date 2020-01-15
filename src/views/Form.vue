<template lang="pug">
  .form
    h2 forms

    b-form(@submit.prevent="formSubmit")
      b-form-group(label="Digite seu nome")
        b-form-input(
          name="name"
          v-model="name"
        )

      b-form-group(label="Selecione uma opção")
        b-form-select(
          name="options"
          :options="options"
          v-model="selected"
        )

      user-select

      .group-a(v-if="selected === 'a'")
        p Campos do grupo A

      .group-b(v-if="selected === 'b'")
        p Campos do grupo B

      user-radio-list

      b-button(type="submit") Enviar

    p(v-if="name") Olá, {{ name }}!
    p(v-if="selectedCapitalize") Classe {{ selectedCapitalize }}
</template>

<script>
import UserSelect from '@/components/user-select.vue'
import UserRadioList from '@/components/user-radio-list.vue'

export default {
  name: 'Form',

  components: {
    UserSelect,
    UserRadioList,
  },

  data: () => ({
    name: null,
    selected: null,
    options: [
      { value: null, text: 'Please select an option' },
      { value: 'a', text: 'This is First option' },
      { value: 'b', text: 'Selected Option' },
      { value: { C: '3PO' }, text: 'This is an option with object value' },
      { value: 'd', text: 'This one is disabled', disabled: true },
    ],
  }),

  computed: {
    selectedCapitalize() {
      const str = typeof this.selected === 'string'
      const obj = this.selected && this.selected.C

      if (str) return this.selected.toUpperCase()

      if (obj) return this.selected.C

      return null
    },
  },

  methods: {
    formSubmit(event) {
      console.dir(event.target)
    },
  },
}
</script>
