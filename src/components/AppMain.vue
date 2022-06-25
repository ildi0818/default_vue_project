<template>
  <div class="row">
    <div class="col-12 col-md6">
        <todo-add-new/>
    </div>
    <div class="col-12 col-md6">
        <todo-list/>
    </div>
  </div>
</template>

<script>
import TodoAddNew from './TodoAddNew.vue'
import TodoList from './TodoList.vue'
export default {
name:'app-main',
components:{TodoAddNew, TodoList}
}
</script>

<style>

</style>