<template lang="pug">
  .about
    h1 This is an about page

    exercicio1

    user-select
</template>

<script>
import Exercicio1 from '@/components/exercicio1.vue'
import UserSelect from '@/components/user-select.vue'

export default {
  name: 'About',

  components: {
    Exercicio1,
    UserSelect,
  },
}
</script>
