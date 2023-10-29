<template>
  <div class="main">
    <TheHome />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const count = useCounter();
    function increase(e: MouseEvent) {
      count.value++;
    }

    return {
      count,
      increase,
    };
  },
});
</script>

<style lang="scss" scoped>

</style>
