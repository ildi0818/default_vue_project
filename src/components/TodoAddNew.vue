<template>
  <div class="form-floating">
    <input
      type="text"
      id="newtodo"
      class="form-control"
      placeholder="New todo"
      v-model="newTodo"
      v-on:keyup.enter='saveTodo'
    />
    <label for="newtodo">New todo</label>
  </div>
</template>

<script>
import store from '@/store'

export default {
  name: "todo-app-new",
  data(){
    return{
        newTodo:''
    }
  },
  methods:{
    saveTodo(){
        this.newTodo = this.newTodo.trim()
        if (this.newTodo=='') return
        store.commit('saveTodo',this.newTodo)
        this.newTodo
    }
  }
};
</script>

<style>
</style>