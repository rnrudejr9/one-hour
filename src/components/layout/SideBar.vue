<script setup>
import Recode from "@/components/Recode.vue";
import { useRecodeStore } from "@/pinia/recodePinia";

const store = useRecodeStore();
</script>

<template>
  <h1>SideBar Area</h1>
  <div v-if="store.itemSize">
    여기는 값이 있으면 보입니다
    <div v-for="recode in store.items">
      <Recode :recode="recode" />
    </div>
  </div>
</template>

<style scoped></style>
