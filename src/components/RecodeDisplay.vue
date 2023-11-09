<script setup>
import { inject, ref, provide } from "vue";
import { useRecodeStore } from "@/pinia/recodePinia";

let id = 0;

const isFinished = inject("isFinished");

const { stopCount, setCountZero } = inject("stop");

const recodes = ref(["내가 한 핵심내용들", "내가 한 정리"]);

const newRecode = ref("");

const props = defineProps({
  startTime: Date,
  endTime: Date,
  chooseTime: String,
})
const startTime = props.startTime;
const endTime = props.endTime;
const chooseTime = props.chooseTime;

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
  setCountZero();
}

function makeRecode() {
  const savedRecode = {
    text: recodes,
    startTime: calcNowTime(startTime),
    endTime: calcNowTime(endTime),
    takeTime: diffTime(),
    chooseTime: chooseTime,
    stopCount: stopCount.value,
  };
  return savedRecode;
}

function diffTime(){
  let dateGap = endTime.getTime() - startTime.getTime();
  let timeGap = new Date(0,0,0,0,0,0,endTime - startTime);
  let diffDay  = Math.floor(dateGap / (1000 * 60 * 60 * 24)); // 일수       
  let hour = timeGap.getHours();       // 시간
  let min  = timeGap.getMinutes();      // 분
  let sec  = timeGap.getSeconds();      // 초
  const diff = hour+":"+min+":"+sec;
  return diff;
}

function calcNowTime(date){
  var today = date;
  var year = today.getFullYear();
  var month = ('0' + (today.getMonth() + 1)).slice(-2);
  var day = ('0' + today.getDate()).slice(-2);
  var hours = ('0' + today.getHours()).slice(-2); 
  var minutes = ('0' + today.getMinutes()).slice(-2);
  var seconds = ('0' + today.getSeconds()).slice(-2); 
  var todayTime = year + '-' + month  + '-' + day + " " + hours + ':' + minutes  + ':' + seconds;
  return todayTime;
}

const store = useRecodeStore();
</script>

<template>
  {{ recodes }}
  <br />
  start time : {{ startTime }}
  <br />
  end time : {{ endTime }}
  <br />

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
