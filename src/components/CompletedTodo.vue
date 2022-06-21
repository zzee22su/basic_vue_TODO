<template>
  <div>
    Completed Todo: {{ numberOfCompledtedTodo }}
  </div>
</template>

<script>
export default {
    computed: {
        todos() {
            return this.$store.state.todos;
        },
        numberOfCompledtedTodo() {
            return this.todos.filter(todo => todo.checked).length;
        }
    }

}
</script>

<style>

</style>