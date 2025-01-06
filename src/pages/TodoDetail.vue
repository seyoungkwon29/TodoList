<template>
  <div>
    <h2>Todo Detail</h2>
    <p>ID: {{ todo.id }}</p>
    <p>Title: {{ todo.title }}</p>
    <p>Completed: {{ todo.completed ? 'Yes' : 'No' }}</p>
    <q-btn label="Back to List" @click="goBack" />
  </div>
</template>

<script setup>
import { useTodoStore } from '../stores/todoStore';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const todoStore = useTodoStore();

// 특정 ID에 해당하는 Todo를 찾음
const todo = todoStore.todos.find(todo => todo.id === Number(route.params.id));

// 리스트 페이지로 돌아가는 함수
const goBack = () => {
  router.push('/todos');
};
</script>
