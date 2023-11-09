<script setup>
import Timer from "./components/Timer.vue";
import Header from "./components/layout/Header.vue";
import SideBar from "./components/layout/SideBar.vue";
</script>

<template>
  <header>
    <h1>Timer App 수정된 배포 앱</h1>
  </header>
  <main>
    <Header />
    <Timer />
  </main>
  <body>
    <SideBar />
  </body>
</template>

<style scoped>
* {
  text-align: center;
}
</style>
