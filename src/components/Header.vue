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
  <header>
   
    <div class="logo-area py-4">
      <div class="container">
        <div class="d-flex justify-content-between">
          <div class="logo d-flex align-items-center">
            <img src="../assets/img/logo-cupula.svg" alt="" height="40" />
            <router-link to="/"
            v-for="item in site" ><h4 class="text-white m-0">{{item.titlesmall}}</h4>
            </router-link>
          </div>
          <div class="search-box d-none d-md-flex">
            <div class="search-bar">
              <input type="text" placeholder="¿Qué quieres buscar?" />
              <button class="btn is-secondary rounded-full">
                <i class="fas fa-search"></i>
              </button>
            </div>
            <a href="#">
              <img src="" alt="" height="32" />
            </a>
          </div>
          <div class="search-box d-flex d-md-none">
            <button class="btn is-secondary rounded-full">
              <i class="fas fa-search"></i>
            </button>
            <a v-on:click="funcion">
              <img  src="../assets/img/icons/icon-hamburger.svg" alt="" height="32" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <nav :class="['d-md-block',nameclass]" id="nav" style="display: none;">
      <div class="container">
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
  </header>
</template>
