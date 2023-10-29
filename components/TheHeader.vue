<template>
  <div class="header p-3">
    <a href="https://dollarsoundtrack.com" target="_blank">
      <img src="~/assets/dst-logo.png" alt="dollarsoundtrack.com">
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const layout = useLayout();

    function btnClass() {
      return layout.value === "custom" ? "bg-red" : "bg-blue";
    }
    function toggleLayout() {
      layout.value = layout.value === "custom" ? "default" : "custom";
    }
    return { layout, btnClass, toggleLayout };
  },
});
</script>

<style scoped>
.header {
  width: 100%;
}

.bg-red {
  background: red;
}

.bg-blue {
  background: blue;
}
</style>
