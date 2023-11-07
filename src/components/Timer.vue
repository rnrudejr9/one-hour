<script setup>
import TimeDisplay from "./TimeDisplay.vue";
import { ref } from "vue";

const timeInput = ref("00:00:00");
const isStarted = ref(false);
let updatedDuration = ref(0);

function setDuration(timeInput) {
  console.log(timeInput);
  const hours = parseInt(timeInput.slice(0, 2));
  const minutes = parseInt(timeInput.slice(3, 5));
  const seconds = parseInt(timeInput.slice(6, 8));

  const time = seconds + minutes * 60 + hours * 3600;

  if (time >= 0 && time < 360000) {
    updatedDuration.value = time;
    console.log(updatedDuration.value);
  } else {
    alert("Invalid input! Enter a positive number");
  }
}

function addDuration(time) {
  updatedDuration.value += time;
}

function startClock() {
  if (!isStarted.value) {
    if (updatedDuration.value > 0) {
      console.log("toggle");
      isStarted.value = true;
      timeInput.value = "00:00:00";
    }
  }
}

function pauseClock() {
  if (isStarted.value) {
    console.log("toggle");
    isStarted.value = false;
  }
}

function decreaseClock() {
  updatedDuration.value--;
  if (updatedDuration.value == 0) {
    isStarted.value = false;
    firework();
  }
}

function firework() {
  var duration = 15 * 100;
  var animationEnd = Date.now() + duration;
  var defaults = { startVelocity: 25, spread: 360, ticks: 50, zIndex: 0 };
  //  startVelocity: 범위, spread: 방향, ticks: 갯수

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  var interval = setInterval(function () {
    var timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    var particleCount = 50 * (timeLeft / duration);
    // since particles fall down, start a bit higher than random
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      })
    );
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      })
    );
  }, 250);
}
</script>

<template>
  <div class="container">
    <TimeDisplay
      @time-decrease="decreaseClock"
      :duration="updatedDuration"
      :is-started="isStarted"
    />
    <div class="control-buttons">
      <button
        :class="{ disabled: isStarted }"
        title="Start"
        @click="startClock()"
      >
        start
        <font-awesome-icon icon="fa-solid fa-play" size="xl" />
      </button>
      <button
        :class="{ disabled: !isStarted }"
        title="Pause/Stop"
        @click="pauseClock()"
      >
        stop
        <font-awesome-icon icon="fa-solid fa-pause" size="xl" />
      </button>
      <button title="+10 Seconds" @click="addDuration(10)">
        +
        <font-awesome-icon icon="fa-solid fa-plus-circle" size="xl" />
      </button>
    </div>
    <div class="presets-buttons">
      <button
        title="Set Preset"
        :class="{ disabled: isStarted }"
        :disabled="isStarted"
        @click="setDuration('01:00:00')"
      >
        1h
      </button>
      <button
        title="Set Preset"
        :class="{ disabled: isStarted }"
        :disabled="isStarted"
        @click="setDuration('00:30:00')"
      >
        30min
      </button>
      <button
        title="Set Preset"
        :class="{ disabled: isStarted }"
        :disabled="isStarted"
        @click="setDuration('00:15:00')"
      >
        15min
      </button>
    </div>
    <input type="time" step="2" v-model="timeInput" />
    <button
      :class="{ disabled: isStarted }"
      :disabled="isStarted"
      @click="setDuration(timeInput)"
      class="set-custom-btn"
    >
      Set custom time
    </button>
  </div>
</template>

<style scoped></style>
