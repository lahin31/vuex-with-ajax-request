<template>
  <div class="users">
    <input type="text" v-model="newUser" v-on:keyup.enter="addUser">
    <ul>
      <li v-for="(user, i) in users" :key="i">
        {{ user.name }}
        <button @click="removeUser(i)">Remove</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'

export default {
  name: 'App',
  data() {
    return {
      newUser: ''
    }
  },
  computed: {
    ...mapState([
      'users'
    ])
  },
  methods: {
    ...mapActions([
      'getUsers',
      'deleteUser'
    ]),

    ...mapMutations([
      'ADD_USER'
    ]),

    removeUser(i) {
      this.deleteUser(i)
    },

    addUser() {
      let userObj = {
        name: this.newUser
      }
      this.ADD_USER(userObj)
      this.newUser = ''
    }
  },
  created() {
    /* eslint-disable */
    this.getUsers().then()
  }
}
</script>

<style>
li {
  list-style: none;
}
</style>
