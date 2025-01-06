import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/MyHome.vue';
import TodoList from '../pages/TodoList.vue';
import TodoDetail from '../pages/TodoDetail.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/todos', component: TodoList },
  { path: '/todos/:id', component: TodoDetail },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
