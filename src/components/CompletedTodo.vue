<template>
  <div>
    Completed Todo: {{ numberOfCompledtedTodo }}
  </div>
</template>

<script>
export default {
    props: {
        todos: {
            type: Array, 
            required: true
        }
    },

    computed: {
        numberOfCompledtedTodo() {
            return this.todos.filter(todo => todo.checked).length;
        }
    }

}
</script>

<style>

</style>