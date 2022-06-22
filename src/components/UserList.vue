<template>
  <div>
    User List
    <!-- state에서 users를 가지고 올 때, people이라는 이름으로 가져왔다면 users 대신 people을 써줘야 한다.  -->
    <div v-for="user in users" :key="user.id">
        {{ user.name }}
    </div>
  </div>

</template>

<script>

//구조분해를 통해 mapState, mapActions만 가져온다. 
import { mapState, mapActions } from 'vuex';
export default {
    created() {
        this.getUsers();
    },

    computed: {
        // mapState computed 안에 넣어준다. 
        // 필요한 것 마다(users, todos...) computed에 users(), todos()처럼 만들어야 하는데 이러한 수고스러움을 줄여주는 것이 vuex가 제공하는 mapHelper이다.

        // state에서 users를 가지고 올 때, 다른 이름을 사용하고 싶다면 
        // mapState([]) -> array가 아닌 mapSTate({}) -> object로 가져오면 된다.
        // ex)  ...mapState({people: 'users'})
        
        //modules 방법 1
        // ...mapState({
        //     //이름만 적어주면 알아서 mapping해준다. 
        //     users: state => state.user.users
        // })        

        //modules 방법 2 
        // ...mapState('user', {
        //     users: state => state.user.users
        // })   

        //modules 방법 3  이름 바꾸지 않을 시, object가({}) 아닌 array로도([]) 가능하다.
        ...mapState('user', ['users'])  

        // users() {
        //     return this.$store.state.users;
        // },
        
        // todos() {
        //     return this.$store.state.todos;
        // }
    },

    methods: {
        // mapActions는 methods 안에 넣어준다. 
        // getUsers를 함수로 사용할 수 있다. (created()에서 호출하였음.)
        ...mapActions('user', ['getUsers'])
        // getUsers() {
        //    this.$store.dispatch('getUsers');
        // }
    }
}
</script>

<style>

</style>