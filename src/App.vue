<template>
  <div id="app" class="container">
    <h1 class="text-center">Todo App</h1>
    <CompltedTodo></CompltedTodo>
    <AddTodo></AddTodo>
    <hr>
    <TodoList></TodoList>
  </div>
</template>

<script>
import TodoList from '@/components/TodoList.vue'
import AddTodo from '@/components/AddTodo.vue'
import CompltedTodo from '@/components/CompletedTodo.vue'

export default {
  components: {
    TodoList, AddTodo, CompltedTodo
  },
  data() {
    return {
      todoText: '',
      // todos : [
      //   { id: 1, text: 'buy a car', checked: false},
      //   { id: 2, text: 'play game', checked: false},
      // ]
    }
  },
  methods: {
    // addTodo(value) {
    //   this.todos.push({
    //     id: Math.random(),
    //     text: value,
    //     checked: false
    //   });
    //   this.todoText = '';
    // },
    // toggleCheckbox({id, checked}) {
    //   const index = this.todos.findIndex(todo => {
    //     return todo.id === id;
    //   });
    //   this.todos[index].checked = checked;
    // },
    // deleteTodo(id) {
      // 방법1
      // const index = this.todos.findIndex(todo => {
      //   return todo.id === id;
      // });
      // this.todos.splice(index, 1);
      // 방법2
      // this.todos = this.todos.filter(todo => todo.id !== id);
    // }
  }
}
</script>

