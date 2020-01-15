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
import UserList from '@/mixins/user-list'

export default {
  name: 'UserSelect',

  mixins: [UserList],
}
</script>
