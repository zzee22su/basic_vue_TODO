<template>
  <diV>
    <input 
        v-model="todoText" 
        type="text" 
        placeholder="Type todo" 
        @keyup.enter="addTodo">
  </diV>
</template>

<script>
export default {
    data() {
        return {
            todoText: '',
        }
    },
    
    methods: {
        addTodo(e) {
            this.$emit('add-todo', e.target.value);
        }
    }

}
</script>

<style>

</style>