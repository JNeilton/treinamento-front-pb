<template lang="pug">
  .user-radio-list
    b-form-group(label="Lista de usuários")
      b-form-radio(
        v-for="user in users"
        :key="user.id"
        :value="user.id"
        name="user"
        v-model="userSelected"
      ) {{ user.name }}
</template>

<script>
export default {
  name: 'UserRadioList',

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
