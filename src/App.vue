<template>
  <div id="app" class="container">
    <h1 class="text-center">Todo App</h1>
    <CompltedTodo></CompltedTodo>
    <AddTodo></AddTodo>
    <hr>
    <TodoList></TodoList>
    <UserList></UserList>
  </div>
</template>

<script>
import TodoList from '@/components/TodoList.vue'
import AddTodo from '@/components/AddTodo.vue'
import CompltedTodo from '@/components/CompletedTodo.vue'
import UserList from '@/components/UserList.vue'

export default {
  components: {
    TodoList, AddTodo, CompltedTodo, UserList
  },

}
</script>

