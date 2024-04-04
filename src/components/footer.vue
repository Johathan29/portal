<script setup>
import navegation from '../navegation';
import metadata from '../Metadata';
const site=metadata.value;
const router = navegation.value;
</script>
<template>
  <footer>
    <div class="container">
      <div class="row align-content-center">
        <div class="col-12 col-md-3">
          <a href="#"
            ><img
              class="footer-logo"
              src="../assets/img/logo-hacienda.svg"
              alt=""
              height="112"
          /></a>
        </div>
        <div class="col-6 col-md-2 mt-4" v-for="item in site">
          <h5 class="text-white is-uppercase">Conócenos</h5>
          <p>{{item.title}}</p>
        </div>
        <div class="col-6 col-md-2 mt-4" v-for="item in site">
          <h5 class="text-white is-uppercase">Contáctanos</h5>
          <p>
            <a v-bind:href="'tel:'+item.phone">
              <i class="fas fa-phone me-2" aria-hidden="true"></i
              >{{item.phone}}</a
            >
          </p>
          <p>
            <a v-bind:href="item.email">
              <i class="fas fa-envelope me-2" aria-hidden="true"></i
              >{{item.email}}</a
            >
          </p>
        </div>
        <div class="col-6 col-md-2 mt-4" v-for="item in site">
          <h5 class="text-white is-uppercase">Búscanos</h5>
          <p>
            {{item.adress}}
          </p>
        </div>
        <div class="col-6 col-md-2 mt-4">
          <h5 class="text-white is-uppercase">Infórmate</h5>
          <ul class="secondary-menu">
          <li
            v-for="item in router"
            v-bind:hidden="[item.ubicacion== 1 ? 'd-none' : '']"
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
      </div>
    </div>
  </footer>
</template>
