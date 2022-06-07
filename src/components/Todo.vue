<template>
    <div>
      <input type="checkbox" :checked="todo.checked">
      <span>{{ todo.text }}</span>
    </div>
</template>

<script>
export default {
    props: {
        todo: {
            type: Object,
            required: true
        }
    }

}
</script>

<style scoped>

</style>