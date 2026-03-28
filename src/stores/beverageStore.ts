import { defineStore } from "pinia";
import type { BaseBeverageType, CreamerType, SyrupType, BeverageType } from "../types/beverage";
import tempretures from "../data/tempretures.json";
import bases from "../data/bases.json";
import creamers from "../data/creamers.json";
import syrups from "../data/syrups.json";

export const useBeverageStore = defineStore("BeverageStore", {
  state: () => ({
    temps: tempretures,
    currentTemp: tempretures[0],
    bases: bases as BaseBeverageType[],
    currentBase: bases[0] as BaseBeverageType,
    creamers: creamers as CreamerType[],
    currentCreamer: creamers[0] as CreamerType,
    syrups: syrups as SyrupType[],
    currentSyrup: syrups[0] as SyrupType,
    beverageName: "",
    savedBeverages: [] as BeverageType[],
  }),

  actions: {
    makeBeverage() {
      const recipe: BeverageType = {
        id: Date.now().toString(),
        name: this.beverageName || "Unnamed Beverage",
        temp: this.currentTemp,
        base: this.currentBase,
        creamer: this.currentCreamer,
        syrup: this.currentSyrup,
      };
      this.savedBeverages.push(recipe);
      this.beverageName = "";
    },

    showBeverage(id: string) {
      const recipe = this.savedBeverages.find((b) => b.id === id);
      if (recipe) {
        this.currentTemp = recipe.temp;
        this.currentBase = recipe.base;
        this.currentCreamer = recipe.creamer;
        this.currentSyrup = recipe.syrup;
      }
    },
  },
  persist: true,
});
