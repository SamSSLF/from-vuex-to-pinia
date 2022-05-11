<template>
  <button @click="cardView">Card View</button>
  <button @click="listView">List View</button>
</template>

<script>
import { useViewStore } from "../stores/ViewStore";
export default {
  name: "ChangeView",
  setup() {
    const ViewStore = useViewStore();
    return {
      ViewStore,
    };
  },
  methods: {
    cardView() {
      this.ViewStore.view = "card";
      console.log(this.ViewStore.view);
    },
    listView() {
      this.ViewStore.view = "list";
      console.log(this.ViewStore.view);
    },
  },
};
</script>
