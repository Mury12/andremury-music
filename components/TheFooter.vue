<template>
  <div class="footer position-relative w-100 px-4 pt-3 pb-1">
    <BRow class="align-items-center">
      <BCol cols="0" md="4" class="" />
      <BCol cols="7" md="4" class="text-center text-white rights">All rights reserved - Andre Mury 2023 ©</BCol>
      <BCol cols="5" md="4" class="">
        <BRow class="justify-content-end align-items-center links">
          <BCol cols="auto"><a href="https://dev.andremury.com" target="_blank">.dev</a></BCol>
          <BCol cols="auto"><a href="https://youtube.com/andremury" target="_blank"><img src="~/assets/icons/yt-icon.png"
                alt="youtube"></a></BCol>
          <BCol cols="auto"><a href="#" target="_blank"><img src="~/assets/icons/spotify-icon.png" alt="spotify"></a>
          </BCol>
          <BCol cols="auto"><a href="https://instagram.com/andmury.music" target="_blank"><img
                src="~/assets/icons/ig-icon.png" alt="instagram"></a></BCol>
        </BRow>
      </BCol>
    </BRow>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  bottom: 0;
  left: 0;
  margin: 0;

  .rights {
    @media screen and (max-width: 768px) {
      font-size: 12px;
    }

    font-size: 16px;
  }

  .links {
    .col-auto {
      padding: 0 5px;
    }

    a {
      color: white;
      text-decoration: none;

    }
  }
}
</style>
