<script setup>
import ShortenLinkBlock from './components/shortenLinkBlock/shortenLink.vue'
import Header from './components/header.vue'
import Intro from './components/intro.vue'
import Stats from './components/statsInfo.vue'
</script>

<template>
  <Header />
  <Intro />
  <div class="bg-gray-100 absolute w-full">
    <ShortenLinkBlock />
    <Stats />
  </div>

</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
