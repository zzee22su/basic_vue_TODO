import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {//데이터가 들어가는 곳 
        todos : [
            { id: 1, text: 'buy a car', checked: false},
            { id: 2, text: 'play game', checked: false},
          ],
          users: []
    },
    mutations: {//state에 있는 데이터를 바꾸는 것은 mutations에서만 가능하다. 
        SET_USERS(state, users) {
            state.users = users;
        },
        ADD_TODO(state, value) {
            state.todos.push({
                id: Math.random(),
                text: value,
                checked: false
              });
              this.todoText = '';
        },
        TOGGLE_TODO(state, {id, checked}) {
            const index = state.todos.findIndex(todo => {
                return todo.id === id;
              });
              state.todos[index].checked = checked;
        }, 
        DELETE_TODO(state, todoId) {
            state.todos = state.todos.filter(todo => todo.id !== todoId);
        }
    },
    actions: {//함수가 들어가는 곳  -> 비동기적인 일을 처리한다. 
        getUsers({commit}) {
            axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
                // 해당 주소로 요청을 보내고 응답이 온 후에 then을 처리한다. -> 비동기 작업
                // ex) axios.get 아래로 console.log()가 있다면 요청을 보내놓고 console.log를 찍고 응답이 오면 then을 처리한다.  
                commit('SET_USERS',response.data);
            });
        },

        // addTodo(context, value) -> vuex가 context를 넘겨준다. -> context 안에는 commit과 dispatch들이 들어있으나 지금은 commit을 사용하기 위해 구조분해하여 따로 빼왔음.
        addTodo({commit}, value) {
            // 여기에서 비동기 작업을 해주고 작업이 끝나면 commit으로 mutation을 해주고 그런다음 state를 변경해주는 것. 
            setTimeout(() => {
                commit('ADD_TODO', value);
            }, 500);
        },

        toggleTodo({commit}, payload) {
            setTimeout(() => {
                commit('TOGGLE_TODO', payload);
            }, 500);
        },
        deleteTodo({commit}, todoId) {
            setTimeout(() => {
                commit('DELETE_TODO', todoId);
            }, 500);
        }

    },
    getters: {//vue 컴포넌트 안의 computed와 비슷한 속성. 

    }

})
