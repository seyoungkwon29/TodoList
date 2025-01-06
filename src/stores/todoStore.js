import { defineStore } from 'pinia';

export const useTodoStore = defineStore('todoStore', {
  state: () => ({
    todos: [
      { id: 1, title: 'Learn Vue 3', completed: false },
      { id: 2, title: 'Build a Quasar App', completed: false },
    ],
  }),

  actions: {
    addTodo(title) {
      this.todos.push({ id: Date.now(), title, completed: false });
    },
    toggleTodo(id) {
      const todo = this.todos.find(todo => todo.id === id);
      if (todo) todo.completed = !todo.completed;
    },
    deleteTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id);
    },
  },
});
