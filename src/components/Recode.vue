<script setup>
const props = defineProps(["recode"]);
const recoder = props.recode;
</script>
<template>
  <div class="card">
    <img src="img_avatar.png" alt="Avatar" style="width: 100%" />
    <div class="container">
      <h4>
        <div v-for="t in recoder.text">
          <b>{{ t }}</b>
        </div>
      </h4>

      <div>start : {{ recoder.startTime }}</div>
      <div>end : {{ recoder.endTime }}</div>
      <div>걸린시간 : {{ recoder.takeTime }}</div>
      <div>선택시간 : {{ recoder.chooseTime }}</div>
      <div>멈춘횟수 : {{ recoder.stopCount }}</div>
    </div>
  </div>
</template>

<style scoped>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 40%;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.container {
  padding: 2px 16px;
}
</style>
