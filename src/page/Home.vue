<script setup>
import data from '../Data';
import fetch from '../user.vue';

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
  <fetch> </fetch>
</template>
