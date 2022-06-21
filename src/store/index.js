import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {//데이터가 들어가는 곳 
        todos : [
            { id: 1, text: 'buy a car', checked: false},
            { id: 2, text: 'play game', checked: false},
          ]
    },
    mutations: {//state에 있는 데이터를 바꾸는 것은 mutations에서만 가능하다. 
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

    },
    getters: {//vue 컴포넌트 안의 computed와 비슷한 속성. 

    }

})
