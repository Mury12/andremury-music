<template>
  <div class="main">
    <TheHome />
  </div>
</template>
<script lang="ts" setup>
useHead({
  title: 'Andre Mury',
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: 'https://dev.andremury.com/logobot.png',
    },
  ],
  meta: [
    {
      name: 'description',
      content: 'Andre Mury - Music Producer',
    },
    {
      name: 'keywords',
      content: 'Andre Mury, Music, Producer, Music Producer, Musician, Composer, Arranger, Mixing, Mastering, Recording, Studio, Music Studio, Music Production, Music Production Studio, Music Production Services, Music Production Company, Music Production Company in Brazil, Music Production Company in São Paulo, Music Production Company in SP, Music Production Company in São Paulo, Music Production Company in Brazil, Music Production'
    }]
})

useSeoMeta({
  title: 'Andre Mury',
  description: 'Andre Mury - Music Producer',
  ogTitle: 'Andre Mury',
  ogDescription: 'Andre Mury - Music Producer',
  ogImage: '/site-bg.jpg',
  ogSiteName: 'Andre Mury',
  ogUrl: 'https://andremury.com',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterSite: '@0xmury',
  googlebot: 'notranslate',
})
</script>

