<script setup>
import { ref } from 'vue'
import metadata from '../Metadata';
const site = metadata.value;
const nameclass=ref();
import navegation from '../navegation';
const router = navegation.value;
const funcion=()=>{
const element=document.getElementById('nav');
var atributo = element.getAttribute('class');
return atributo=='d-md-block'? element.classList.add('d-block'):
  element.classList.remove('d-block');

}
</script>
<template>
  <header class="absolute z-1">
   
    <div class="">
      <div class="container mx-auto">
        <div class="flex justify-between p-4 ">
          <div class="logo ">
            <router-link to="/"
            v-for="item in site" >
            <img src="/assets/vue.svg" alt="" height="40" />
            
            </router-link>
          </div>
          <nav :class="['d-md-block z-0 ',nameclass]" id="nav" style="display: none;">
      <div class="container mx-auto">
        <ul class="main-nav">
          <li
            v-for="item in router"
            :class="[item.children.length >= 1 ? 'is-dropdown' : '' + item.ubicacion== 0 ? 'd-none' : '']"
            v-bind:hidden="[ item.ubicacion== 0 ? 'd-none' : '']"
          >
            <router-link v-bind:to="item.path">{{ item.title }}</router-link>
            <ul v-if="item.children != ''" class="sub-menu">
              <li v-for="subitem in item.children">
                <router-link v-bind:to="subitem.path">
                  {{ subitem.titlechild }}
                </router-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
          <div class="search-box d-flex d-md-none">
            <a v-on:click="funcion">
              <img  src="../assets/img/icons/icon-hamburger.svg" alt="" height="32" />
            </a>
          </div>
        </div>
      </div>
    </div>
   
  </header>
</template>
