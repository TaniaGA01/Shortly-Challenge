<script setup>
import ShortenLinkBlock from './components/shortenLinkBlock/shortenLink.vue'
import Header from './components/header.vue'
import Intro from './components/intro.vue'
import Stats from './components/statsInfo.vue'
import BottomBlock from './components/bottomBlock.vue'
import Footer from './components/footer.vue'
</script>

<template>
  <Header />
  <Intro />
  <div class="bg-gray-100 pt-12 sm:pt-16">
    <ShortenLinkBlock />
    <Stats />
  </div>
  <BottomBlock />
  <Footer />

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
