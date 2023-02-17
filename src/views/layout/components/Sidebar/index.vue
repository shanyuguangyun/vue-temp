<template>
  <div class="sidebar">
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        mode="vertical"
        :default-active="activeMenu"
        :collapse="isCollapse"
        background-color="#304156"
        text-color="#bfcbd9"
        active-text-color="#409EFF"
      >
        <sidebar-item
          v-for="item in routes"
          :key="item.path"
          :item="item"
          :basePath="item.path"
        >
        </sidebar-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import SidebarItem from "./SidebarItem";
import { mapGetters } from "vuex";
export default {
  components: {
    SidebarItem,
  },
  data() {
    return {
      isCollapse: false,
    };
  },
  computed: {
    ...mapGetters(["routes"]),
    routes() {
      return [
        {
          path: "/404",
          name: "404",
          hidden: false,
          meta: {
            title: "404",
          },
        },
        {
          path: "/login",
          name: "Login",
          hidden: false,
          meta: {
            title: "login",
          },
        },
      ];
    },
    activeMenu() {
      return this.$route.path;
    },
  },
};
</script>