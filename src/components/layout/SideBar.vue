<script setup>
import Recode from "@/components/Recode.vue";
import { useRecodeStore } from "@/pinia/recodePinia";

const store = useRecodeStore();
</script>

<template>
  <h1>SideBar Area</h1>
  <div v-if="store.isHave">여기는 값이 있으면 보입니다</div>
  {{ store }}
  <br />
  {{ store.count }}
  <br />
  {{ store.name }}
  <br />
  {{ store.items }}
  <div><Recode /></div>
</template>

<style scoped></style>
