<template lang="pug">
  .user-select
    b-form-group(label="Usuários")
      b-form-select(
        name="users"
        :options="users"
        value-field="id"
        text-field="name"
        v-model="userSelected"
      )
</template>

<script>
export default {
  name: 'UserSelect',

  data: () => ({
    users: [],
    userSelected: null,
  }),

  mounted() {
    this.requestUsers()
  },

  methods: {
    requestUsers() {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(resp => resp.json())
        .then((json) => { this.users = json })
        .catch(error => console.error(error))
    },
  },
}
</script>
