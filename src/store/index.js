import { createStore } from 'vuex'

export default createStore({
    state:{
        todos:[]
    },
    getters:{},
    mutations:{
        saveTodo(state, newTodo){
            let maxId = Math.max(...state.todos.map(X => X.id))
            state.todos.push({
                'id': isFinite(maxId) ? maxId+1 : 1,
                'text':newTodo,
                'completed':false,
                'isEdited':false
            })
        },
        editTodo(state,todo){
            state.todos.forEach(x => x.isEdited = false)
            state.todos.find(x => x == todo).isEdited=true
        },
        doneEdit(state,todo){
            state.todos.find(x => x == todo).isEdited=false
        },
        removeTodo(state,todo){
            state.todos.splice(state.todos.indexOf(todo),1)
        }
    }
})