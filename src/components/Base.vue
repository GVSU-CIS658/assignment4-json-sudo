<template>
  <div class="base" :style="{ backgroundColor: beverageStore.currentBase.color }"></div>
</template>

<script setup lang="ts">
import { useBeverageStore } from "../stores/beverageStore";
const beverageStore = useBeverageStore();
</script>
