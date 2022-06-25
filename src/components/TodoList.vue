<template>
  <ul class="list-group">
    <li
      class="list-group-item"
      v-for="todo in $store.state.todos"
      :key="todo.id"
    >
      <div class="form-check">
        <input
          type="checkbox"
          :id="todo.id"
          class=""
          v-model="todo.completed"
        />
      </div>
      <label
        class="ms-2"
        @dblclick="editTodo(todo)"
        v-if="!todo.isEdited"
        :class="{ 'line-through': todo.completed }"
      >
        {{ todo.text }}
      </label>
      <input
        type="text"
        :id="todo.id"
        class="form-control"
        v-model="todo.text"
        v-if="todo.isEdited"
        @keyup.enter="doneEdit(todo)"
        @keyup.esc="cancelEdit(todo)"
        @blur="cancelEdit(todo)"
        @vnode-mounted="
          ({ el }) => {
            el.focus();
          }
        "
      />

      <button class="trash" @click="removeTodo">
        <i class="bi bi-trash"></i>
      </button>
    </li>
  </ul>
</template>

<script>
import store from "@/store";

export default {
  name: "todo-list",
  // computed:{
  //     todos(){
  //         return store.state.todos
  //     }
  // }
  data() {
    return {
      beforeEditText: null,
    };
  },
  methods: {
    editTodo(todo) {
      this.beforeEditText = todo.text;
      store.commit("editTodo", todo);
    },
    doneEdit(todo) {
      todo.text = todo.text.trim();
      if (todo.text == "") return;
      store.commit("doneEdit", todo);
    },
    cancelEdit(todo) {
      todo.text = this.beforeEditText;
      store.commit("doneEdit", todo);
    },
    removeTodo(todo){
        store.commit('removeTodo',todo)
    }
  },
};
</script>

<style>
.line-through {
  text-decoration: line-through;
}

.list-group-item .trash {
    display: none;
    background-color: transparent;
    border: 0;
    position: absolute;
    right: 10px;
    font-size: 20px;
}

.list-group-item:hover .trash {
    display: inline-block;
}

.list-group-item .trash:hover {
    color: red;
}

</style>