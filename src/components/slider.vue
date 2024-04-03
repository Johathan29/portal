<script setup>
import data from '../Data';
import fetch from '../About.vue';
import { ref } from 'vue';
const valores = ref([]);
console.log(data.value.length);
const activeclass = ref('active carousel-item');
valores.value = data.value;
valores.value.map((item) => item);
const detalleUser = () => {
  console.log('users.value');
};
</script>
<template>
  <div
    id="carouselExampleDark"
    class="carousel carousel-dark slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-inner splide__slide">
      <div
        v-for="(item, index) in valores"
        :key="index"
        :class="[index == 0 ? activeclass : 'carousel-item']"
        data-bs-interval="10000"
      >
        <div v-bind:id="index">
          <img v-bind:src="item.Imagen" class="d-block w-100" alt="..." />
          <div class="slide__text">
            <h2 class="text-white">{{ item.Nombre }}</h2>
            <p></p>
          </div>
        </div>
      </div>
    </div>
    <div class="splide__arrows">
      <button
        class="splide__arrow splide__arrow--prev"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="prev"
      >
        <i class="fas fa-chevron-circle-left"></i>
      </button>
      <button
        class="splide__arrow splide__arrow--next"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="next"
      >
        <i class="fas fa-chevron-circle-right"></i>
      </button>
    </div>
  </div>
  <!--<Suspense>
    <template #default>
      <fetch> </fetch>
    </template>
    <template #fallback
      ><h1 contenteditable data-heading="Frozen">Cargando</h1>
    </template>
  </Suspense>-->
</template>
