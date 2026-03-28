<template>
  <div class="syrup" :style="{ '--syrup-color': beverageStore.currentSyrup.color }"></div>
</template>

<script setup lang="ts">
import { useBeverageStore } from "../stores/beverageStore";
const beverageStore = useBeverageStore();
</script>
