import Home from '../pages/Home.vue';
import TodoList from '../pages/TodoList.vue';
import TodoDetail from '../pages/TodoDetail.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/todos', component: TodoList },
  { path: '/todos/:id', component: TodoDetail },
  
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
