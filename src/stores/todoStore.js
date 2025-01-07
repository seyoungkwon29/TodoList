import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTodoStore = defineStore('todoStore', () => {
  const todos = ref([])
  const nextId = 0

  function addTodo(title) {
    console.log('title >>>>> ', title)

    const newTodo = { id: this.nextId, title, completed: false }

    todos.value.push(newTodo)
    this.nextId++
  }

  function readTodo() {
    console.log('Current Todos:')
    this.todos.forEach(todo => {
      console.log(`ID: ${todo.id}, Title: ${todo.title}, Completed: ${todo.completed}`)
    })
  }

  function toggleTodo(id) {
    const todo = this.todos.find(todo => todo.id === id)
    if (todo) todo.completed = !todo.completed
  }

  function deleteTodo(id) {
    console.log('id >>>>> ', id)
    this.todos = this.todos.filter(todo => todo.id !== id)
  }

  return { todos, nextId, addTodo, readTodo, toggleTodo, deleteTodo }
})
