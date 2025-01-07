<template>
  <div class="home">
    <h2>To-Do List</h2>
    <p>Manage your tasks efficiently!</p>
    <q-btn 
      style="background: goldenrod; color: white" 
      label="할 일 보기"
      @click="$router.push('/todos')"/>
  </div>
</template>