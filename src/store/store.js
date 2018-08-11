import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        title: 'Lahin',
        users: []
    },
    mutations: {
        GET_USERS: (state, data) => {
            state.users = data;
        },
        ADD_USER: (state, data) => {
            state.users.push(data)
        },
        REMOVE_USER: (state, index) => {
            state.users.splice(index, 1)
        }
    },
    actions: {
        getUsers: (context) => {
            axios.get('https://jsonplaceholder.typicode.com/users')
                 .then(
                    (response) => {
                       context.commit("GET_USERS", response.data)
                    }
                 )
        },
        deleteUser: (context, index) => {
            context.commit("REMOVE_USER", index)
        }
    }
})