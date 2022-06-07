<template>
    <div>
      <input type="checkbox" :checked="todo.checked" @change="toggleCheckbox">
      <span 
        :class="todo.checked ? 'text-muted' : ''" 
        :style="todo.checked ? 'text-decoration:line-through': ''">
        {{ todo.text }}
      </span>
    </div>
</template>

<script>
export default {
    props: {
        todo: {
            type: Object,
            required: true
        }
    },
    methods: {
        toggleCheckbox(e) {
            this.$emit('toggle-checkbox', {
                id: this.todo.id,
                checked: e.target.checked
            })
        }
    }

}
</script>

<style scoped>

</style>