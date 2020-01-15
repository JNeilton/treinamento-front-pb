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
import UserList from '@/mixins/user-list'

export default {
  name: 'UserRadioList',

  mixins: [UserList],
}
</script>
