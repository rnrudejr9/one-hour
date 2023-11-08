<script setup>
import { inject, ref, provide } from "vue";
import { useRecodeStore } from "@/pinia/recodePinia";

let id = 0;

const isFinished = inject("isFinished");

const recodes = ref(["내가 한 핵심내용들", "내가 한 정리"]);

const newRecode = ref("");

function addRecode() {
  recodes.value.push(newRecode.value);
  newRecode.value = "";
}

function removeRecode(recode) {
  recodes.value = recodes.value.filter((t) => t !== recode);
}

function saveRecode() {
  isFinished.value = false;
  const data = makeRecode();
  store.$patch((state) => {
    state.items.push(data);
    state.hasChanged = true;
  });
}

function makeRecode() {
  const savedRecode = {
    text: recodes,
    startTime: 1,
    endTime: 2,
    takeTime: 3,
    stopTime: 4,
  };
  return savedRecode;
}

const store = useRecodeStore();
</script>

<template>
  {{ recodes }}

  <form @submit.prevent="addRecode">
    <input v-model="newRecode" />
    <button>Add Todo</button>
  </form>
  <ul>
    <li v-for="recode in recodes" :key="recode.id">
      <input type="checkbox" v-model="recode.done" />
      <span :class="{ done: recode.done }">{{ recode }}</span>
      <button @click="removeRecode(recode)">X</button>
    </li>
  </ul>
  <button @click="saveRecode()">저장하기</button>
</template>

<style scoped></style>
