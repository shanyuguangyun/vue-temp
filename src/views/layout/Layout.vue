<template>
  <div class="app-wrapper">
    <sidebar class="sidebar-container"></sidebar>
    <div class="main-container">
      <navbar></navbar>
      <app-main></app-main>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/views/layout/components/Sidebar";
import AppMain from "@/views/layout/components/AppMain";
import Navbar from "@/views/layout/components/Navbar";
export default {
  name: "layout",
  components: {
    Navbar,
    Sidebar,
    AppMain,
  },
};
</script>