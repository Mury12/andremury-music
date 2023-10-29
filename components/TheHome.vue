<template>
  <div class="home h-100 p-md-3">
    <BRow class="justify-content-center mb-5">
      <BCol cols=12 lg=6 md=12 class="flex">
        <h1 class="title text-center my-5">ANDRE MURY</h1>
        <div class="divider w-50" />
      </BCol>
    </BRow>
    <BRow class="p-md-3 justify-content-center">
      <ReleaseList />
    </BRow>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.home {
  .title {
    font-size: 96px;
  }

  .divider {
    opacity: 0.5;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 1px;
    background: white;
    margin: 20px 0;
  }
}
</style>
