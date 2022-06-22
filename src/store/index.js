import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user';
import todo from './modules/todo';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        // user: user를 user로 생략이 가능하다. 
        user, todo
    },

    state: {//데이터가 들어가는 곳 
    },

    mutations: {//state에 있는 데이터를 바꾸는 것은 mutations에서만 가능하다. 
    },

    actions: {//함수가 들어가는 곳  -> 비동기적인 일을 처리한다.
    },
    
    getters: {//vue 컴포넌트 안의 computed와 비슷한 속성. 
    }
})
