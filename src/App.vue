<template>
  <div>
    <h1>Make your beverage!</h1>
    <Beverage :isIced="beverageStore.currentTemp === 'Cold'" />
    <ul>
      <li>
        <h2>Temperature</h2>
        <template v-for="temp in beverageStore.temps" :key="temp">
          <label>
            <input
              type="radio"
              name="temperature"
              :id="`r${temp}`"
              :value="temp"
              v-model="beverageStore.currentTemp"
            />
            {{ temp }}
          </label>
        </template>
      </li>
      <li>
        <h2>Bases</h2>
        <template v-for="base in beverageStore.bases" :key="base.id">
          <label>
            <input
              type="radio"
              name="base"
              :id="base.id"
              :value="base"
              v-model="beverageStore.currentBase"
            />
            {{ base.name }}
          </label>
        </template>
      </li>
      <li>
        <h2>Creams</h2>
        <template v-for="creamer in beverageStore.creamers" :key="creamer.id">
          <label>
            <input
              type="radio"
              name="creamer"
              :id="creamer.id"
              :value="creamer"
              v-model="beverageStore.currentCreamer"
            />
            {{ creamer.name }}
          </label>
        </template>
      </li>
      <li>
        <h2>Syrups</h2>
        <template v-for="syrup in beverageStore.syrups" :key="syrup.id">
          <label>
            <input
              type="radio"
              name="syrup"
              :id="syrup.id"
              :value="syrup"
              v-model="beverageStore.currentSyrup"
            />
            {{ syrup.name }}
          </label>
        </template>
      </li>
    </ul>
    <div class="make-beverage-container">
      <input type="text" placeholder="Beverage Name" v-model="beverageStore.beverageName" />
      <button @click="beverageStore.makeBeverage()">🍺 Make Beverage</button>
    </div>
  </div>
  <div id="beverage-container">
    <template v-if="beverageStore.savedBeverages.length > 0">
      <h2>Saved Beverages</h2>
      <template v-for="beverage in beverageStore.savedBeverages" :key="beverage.id">
        <label>
          <input
            type="radio"
            name="savedBeverage"
            :value="beverage.id"
            @change="beverageStore.showBeverage(beverage.id)"
          />
          {{ beverage.name }}
        </label>
      </template>
    </template>
  </div>
</template>

<script setup lang="ts">
import Beverage from "./components/Beverage.vue";
import { useBeverageStore } from "./stores/beverageStore";
const beverageStore = useBeverageStore();
</script>
