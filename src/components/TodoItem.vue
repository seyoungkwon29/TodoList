<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  todo: Object,
})

const emits = defineEmits(['toggle', 'remove'])

// todo.completed의 복사본을 관리
const completed = ref(props.todo.completed)

// 부모 컴포넌트에 상태 업데이트 이벤트 전달
const updateCompleted = (value) => {
  completed.value = value;
  emits('toggle', props.todo.id);
}

// 부모로부터 todo prop 변경 시 동기화
watch(() => props.todo.completed, (newValue) => {
  completed.value = newValue
})

const emitRemove = () => {
  console.log('emitRemove >>>>> ', props.todo.id)
  emits('remove', props.todo.id)
}
</script>


<template>
  <div class="todo-item">
    <q-checkbox
      :model-value="completed"
      @update:model-value="updateCompleted"
      :label="todo.title"
    />
    <q-btn flat icon="delete" color="negative" @click="emitRemove" />
  </div>
</template>