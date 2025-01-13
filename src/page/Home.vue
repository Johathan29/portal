<script lang="ts" setup>
import {auth} from '../firebase';
//console.log(auth.auth)
</script>
<template>
  <Slider></Slider>
  <Testimonio></Testimonio>
  
</template>
<script lang="ts">
import data from '../Data';
import fetch from '../user.vue';

import { ref } from 'vue';
import Testimonio from './testimonio.vue';
import Slider from '../components/slider.vue';
const valores = ref([]);

const activeclass = ref('active carousel-item');
valores.value = data.value;
valores.value.map((item) => item);
const detalleUser = () => {
users.value
};
</script>