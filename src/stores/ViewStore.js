import { defineStore } from "pinia";

export const useViewStore = defineStore("ViewStore", {
  state() {
    return {
      view: "list",
    };
  },
});
