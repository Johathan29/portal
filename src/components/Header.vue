<script setup>
import navegation from '../navegation';
const router = navegation.value;
</script>
<template>
  <header>
    <div class="top-bar py-2">
      <div class="container">
        <details class="details">
          <summary class="d-flex cursor-pointer">
            <img
              src="img/icons/icon-dominican-flag.svg"
              alt=""
              height="16"
              class="me-2"
            />
            <p>
              Esta es una web oficial del Gobierno de la República Dominicana.
              <span class="text-primary text-underline text-semibold"
                >Asi es como puedes saberlo <i class="fas fa-chevron-down"></i
              ></span>
            </p>
          </summary>
          <div class="row py-3">
            <div class="col-12 col-md-6 d-flex gap-1">
              <img src="img/icons/icon-cupula.png" alt="" height="32" />
              <div>
                <p class="text-semibold text-primary">
                  Los sitios web oficiales utilizan .gob.do, .gov.do o .mil.do
                </p>
                <p>
                  Un sitio .gob.do, .gov.do o .mil.do significa que pertenece a
                  una organización oficial del Estado dominicano.
                </p>
              </div>
            </div>
            <div class="col-12 col-md-6 d-flex gap-1">
              <img src="img/icons/icon-lock.png" alt="" height="32" />
              <div>
                <p class="text-semibold text-primary">
                  Los sitios web oficiales .gob.do, .gov.do o .mil.do seguros
                  usan HTTPS
                </p>
                <p>
                  Un candado (🔒) o https:// significa que estás conectado a un
                  sitio seguro dentro de .gob.do o .gov.do. Comparte información
                  confidencial solo en los sitios seguros de .gob.do o gov.do.
                </p>
              </div>
            </div>
          </div>
        </details>
      </div>
    </div>
    <div class="logo-area py-4">
      <div class="container">
        <div class="d-flex justify-content-between">
          <div class="logo d-flex align-items-center">
            <img src="img/logo-cupula.svg" alt="" height="40" />
            <router-link to=""
              ><h4 class="text-white m-0">Texto link</h4>
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
              <img src="img/icons/icon-grid.svg" alt="" height="32" />
            </a>
          </div>
          <div class="search-box d-flex d-md-none">
            <button class="btn is-secondary rounded-full">
              <i class="fas fa-search"></i>
            </button>
            <a href="">
              <img src="img/icons/icon-hamburger.svg" alt="" height="32" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <nav class="d-none d-md-block">
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
