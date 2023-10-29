<template>
  <div class="__page-root bg-red">
    <div class="bg-mask" />
    <BRow class="__main">
      <BCol cols="12">
        <TheHeader />
        <BContainer class="main">
          <slot></slot>
        </BContainer>
      </BCol>
    </BRow>
    <TheFooter />
  </div>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Courgette&family=Mohave&family=Poppins:wght@200;300;500;700&display=swap');

.__page-root {
  font-family: Mohave, "Open Sans";
  color: white;
  // padding-top: 5px;
  min-height: 100dvh;
  position: relative;
  max-width: 100vw;
  overflow-x: hidden;
  background-image: url("~/assets/site-bg.jpg");
  background-size: cover;
  background-attachment: fixed;

  .__main {
    padding-top: 5px;
    position: relative;
    z-index: 1;
  }

  .bg-mask {
    z-index: 0;
    position: absolute;
    top: 0;
    right: 0;

    @media screen and (max-width: 768px) {
      width: 100%;
    }

    @media screen and (min-width: 768px) {
      width: 50%;

    }

    height: 100%;
    background-image: linear-gradient(to left,
      rgba(0, 0, 0, 0.5) 60%,
      transparent);
    // border: 3px solid white;
    backdrop-filter: blur(2px);
  }

  .container {
    width: 100%;
    max-width: 100dvw;
  }
}
</style>

<style> .pointer {
   cursor: pointer;
 }

 .opacity-0\.8 {
   opacity: 0.8;
 }

 .opacity-0\.5 {
   opacity: 0.5;
 }
</style>
