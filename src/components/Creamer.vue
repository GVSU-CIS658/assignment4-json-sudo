<template>
  <div class="froth">
    <div v-for="n in 5" :key="n" class="foam" :style="{ backgroundColor: beverageStore.currentCreamer.color }"></div>
  </div>
</template>

<script setup lang="ts">
import { useBeverageStore } from "../stores/beverageStore";
const beverageStore = useBeverageStore();
</script>
