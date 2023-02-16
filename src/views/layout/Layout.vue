<template>
  <div id="app-wrapper">
    <sidebar class="sidebar-container"></sidebar>
  </div>
</template>

<script>
import { Sidebar, AppMain } from "./components";
export default {
  name: "layout",
  components: {
    Sidebar,
    AppMain
  },
};
</script>