<script setup>
import { inject } from "vue";

const isFinished = inject("isFinished");
</script>

<template>
  <form v-on:submit.prevent>
    <input type="text" />
    <button>추가</button>
    inject 받은 데이터 {{ isFinished }}
    여기는 모달창입니다.
    <button @click="isFinished = false">모달창 닫기</button>
  </form>
</template>

<style scoped></style>
