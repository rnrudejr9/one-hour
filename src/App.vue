<script setup>
import { RouterLink, RouterView } from "vue-router";
import Timer from "./components/Timer.vue";
import SideBar from "./components/layout/SideBar.vue";
</script>

<template>
  <h1>Timer App</h1>
  <div>
    <nav>
      <RouterLink to="/manual" class="menu">1시간 공부법이란?</RouterLink>
      <!-- <RouterLink to="/how" class="menu">어떻게 사용하나요?</RouterLink> -->
    </nav>
  </div>
  <main>
    <Timer />
  </main>
  <body>
    <SideBar />

    <RouterView />
  </body>
</template>

<style scoped>
* {
  text-align: center;
}
nav {
  font-size: 17px;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  letter-spacing: 0.2em;
}
.menu {
  color: black;
  text-decoration-line: none;
}
.menu:hover {
  width: 200px;

  height: 200px;

  cursor: pointer;
}
</style>
