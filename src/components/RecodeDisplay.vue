<script setup>
import { inject, ref, provide } from "vue";

let id = 0;

const isFinished = inject("isFinished");

const recodes = ref([
  { id: id++, text: "내가 한 핵심내용들", done: false },
  { id: id++, text: "내가 한 정리", done: false },
]);

const newRecode = ref("");

function addRecode() {
  recodes.value.push({ id: id++, text: newRecode.value, done: false });
  newRecode.value = "";
}

function removeRecode(recode) {
  recodes.value = recodes.value.filter((t) => t !== recode);
}

function saveRecode() {
  isFinished.value = false;
}
</script>

<template>
  <form v-on:submit.prevent>
    <input type="text" />
    <button>추가</button>
    inject 받은 데이터 {{ isFinished }}
    여기는 모달창입니다.
    <button @click="isFinished = false">모달창 닫기</button>
  </form>

  <form @submit.prevent="addRecode">
    <input v-model="newRecode" />
    <button>Add Todo</button>
  </form>
  <ul>
    <li v-for="recode in recodes" :key="recode.id">
      <input type="checkbox" v-model="recode.done" />
      <span :class="{ done: recode.done }">{{ recode.text }}</span>
      <button @click="removeRecode(recode)">X</button>
    </li>
  </ul>
  <button @click="saveRecode()">저장하기</button>
</template>

<style scoped></style>
