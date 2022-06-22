<template>
  <div>
    Completed Todo: {{ numberOfCompledtedTodo }}
  </div>
</template>

<script>
export default {
    computed: {
        numberOfCompledtedTodo() {
            return this.$store.getters.numberOfCompledtedTodo;
        }
    }

}
</script>

<style>

</style>