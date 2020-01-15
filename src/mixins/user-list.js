export default {
  data: () => ({
    users: [],
    userSelected: null,
    userValidation: false,
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
