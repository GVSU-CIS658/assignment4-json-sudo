<template>
  <Mug>
    <Cold v-if="isIced" />
    <Hot v-else />
    <Contents>
      <template v-slot:top>
        <Creamer v-if="hasCreamer" />
      </template>
      <template v-slot:mid>
        <Syrup v-if="hasSyrup" />
      </template>
      <template v-slot:bottom>
        <Base />
      </template>
    </Contents>
  </Mug>
</template>

<script setup lang="ts">
import { computed } from "vue";
import Contents from "./Contents.vue";
import Mug from "./Mug.vue";
import Syrup from "./Syrup.vue";
import Base from "./Base.vue";
import Creamer from "./Creamer.vue";
import Hot from "./Hot.vue";
import Cold from "./Cold.vue";
import { useBeverageStore } from "../stores/beverageStore";

type Props = {
  isIced: boolean;
};
defineProps<Props>();

const beverageStore = useBeverageStore();
const hasCreamer = computed(() => beverageStore.currentCreamer.id !== "c1");
const hasSyrup = computed(() => beverageStore.currentSyrup.id !== "s1");
</script>
