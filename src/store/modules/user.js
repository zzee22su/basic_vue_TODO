import axios from 'axios';

export default {
    namespaced: true,
    state: {
        users: []
    },

    mutations: {
        SET_USERS(state, users) {
            state.users = users;
        },
    }, 
    
    actions: {
        getUsers({commit}) {
            axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
                // 해당 주소로 요청을 보내고 응답이 온 후에 then을 처리한다. -> 비동기 작업
                // ex) axios.get 아래로 console.log()가 있다면 요청을 보내놓고 console.log를 찍고 응답이 오면 then을 처리한다.  
                commit('SET_USERS',response.data);
            });
        },
    }
}