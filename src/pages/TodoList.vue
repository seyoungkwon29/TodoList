<script setup>
  import { ref } from 'vue'
  import { useTodoStore } from '../stores/todoStore'
  import TodoItem from '../components/TodoItem.vue'

  const todoStore = useTodoStore()
  const newTodo = ref('')

  const addTodo = () => {
    if (newTodo.value.trim()) {
      todoStore.addTodo(newTodo.value)
      newTodo.value = ''
    }
  }

  const todos = todoStore.todos; // Pinia store의 todos 배열
  const toggleTodo = todoStore.toggleTodo
  const deleteTodo = todoStore.deleteTodo
  const readTodo = todoStore.readTodo
</script>

<template>
  <div>
    <h2>To-Do List</h2>
    <q-input v-model="newTodo" placeholder="Add a new task" @keyup.enter="addTodo" />
    <q-btn label="Add" @click="addTodo" />
    <q-btn label="READ" @click="readTodo" />

    <div v-for="todo in todos" :key="todo.id">
      <TodoItem :todo="todo" @toggle="toggleTodo" @remove="deleteTodo" />
    </div>
  </div>
</template>

