<template>
  <div v-bind="returnToTag(to)">
    <slot />
  </div>
</template>
<script>
import { isAbsolutePath } from "@/utils/validate";
export default {
  props: {
    to: {
      type: String,
      required: true,
    },
  },
  methods: {
    returnToTag(path) {
      if (isAbsolutePath(path)) {
        return {
          is: "a",
          target: "_blank",
          href: path,
        };
      } else {
        return {
          is: "router-link",
          to: path,
        };
      }
    },
  },
};
</script>   