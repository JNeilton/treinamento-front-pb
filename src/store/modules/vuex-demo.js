export default {
  namespaced: true,
  state: {
    users: [],
    user: {
      id: null,
      name: null,
      username: null,
      email: null,
      address: {
        street: null,
        suite: null,
        city: null,
        zipcode: null,
        geo: {
          lat: null,
          lng: null,
        },
      },
      phone: null,
      website: null,
      company: {
        name: null,
        catchPhrase: null,
        bs: null,
      },
    },
  },
  getters: {
    getUsers(state) {
      return state.users
    },
  },
  mutations: {
    listUsers(state, data) {
      state.users = data
    },
  },
  actions: {
    requestUsers({ commit }) {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(resp => resp.json())
        .then((json) => { commit('listUsers', json) })
        .catch(error => console.error(error))
    },
  },
}
