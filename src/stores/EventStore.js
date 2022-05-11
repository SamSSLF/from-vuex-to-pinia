import { defineStore } from "pinia";

export const useEventStore = defineStore("EventStore", {
  state() {
    return {
      events: [],
      event: {},
    };
  },
  getters: {
      numberOfEvents(state) {
          return state.events.length
      }
  }
});
