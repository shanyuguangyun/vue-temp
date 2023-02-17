<template>
  <div class="sidebar-item" v-if="!item.hidden">
    <template
      v-if="
        hasOnlyChildren(item.children, item) &&
        (!childItem.children || childItem.noChild)
      "
    >
      <page-link v-if="childItem.meta" :to="resolvePath(childItem.path)">
        <el-menu-item :index="resolvePath(childItem.path)">
          <i :class="childItem.meta.icon ? childItem.meta.icon : ''"></i>
          <span slot="title">{{ childItem.meta.title }}</span>
        </el-menu-item>
      </page-link>
    </template>
    <el-submenu v-else :index="resolvePath(item.path)">
      <template slot="title">
        <i :class="item.meta.icon ? item.meta.icon : ''"></i>
        <span>{{ item.meta.title }}</span>
      </template>
      <sidebar-item
        v-for="child in item.children"
        :key="child.path"
        :item="child"
        :basePath="resolvePath(child.path)"
      >
      </sidebar-item>
    </el-submenu>
  </div>
</template>

<script>
import path from 'path'
import PageLink from "./Link.vue";
import { isAbsolutePath } from "@/utils/validate";
export default {
  components: { PageLink },
  props: {
    item: {
      type: Object,
      required: true,
    },
    basePath: {
      type: String,
      default: "",
    },
  },
  data() {
    return { childItem: null };
  },
  methods: {
    hasOnlyChildren(children = [], item) {
      let notHiddenChildren = children.filter((o) => {
        if (o.hidden) {
          return false;
        } else {
          return true;
        }
      });
      if (notHiddenChildren.length === 1 && !item.meta) {
        this.childItem = notHiddenChildren[0];
        return true;
      }
      if (notHiddenChildren.length === 0) {
        this.childItem = { ...item, path: "", noChild: true };
        return true;
      }
      return false;
    },
    resolvePath(router) {
      if (isAbsolutePath(router)) {
        return router;
      }
      if (isAbsolutePath(this.basePath)) {
        return this.basePath;
      }
      return path.join(this.basePath, router);
    },
  },
};
</script>