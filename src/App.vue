<script setup>
import Header from './components/Header.vue';
import Foot from './components/footer.vue';
import Slider from './components/slider.vue';
</script>
<template>
  <Header />
  <slider />
  <div>
    <router-view></router-view>
  </div>
  <foot></foot>
</template>

<script>
export default {
  name: 'App',
};
</script>
