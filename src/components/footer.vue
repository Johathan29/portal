<script setup>
import navegation from '../navegation';
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
        <div class="col-6 col-md-2">
          <h5 class="text-white is-uppercase">Conócenos</h5>
          <p>Ministerio de Hacienda de República Dominicana</p>
        </div>
        <div class="col-6 col-md-2">
          <h5 class="text-white is-uppercase">Contáctanos</h5>
          <p>
            <a href="tel:(809)-687-5131">
              <i class="fas fa-phone me-2" aria-hidden="true"></i
              >(809)-687-5131</a
            >
          </p>
          <p>
            <a href="mailto:info@hacienda.gov.do">
              <i class="fas fa-envelope me-2" aria-hidden="true"></i
              >info@hacienda.gov.do</a
            >
          </p>
        </div>
        <div class="col-6 col-md-2">
          <h5 class="text-white is-uppercase">Búscanos</h5>
          <p>
            Avenida México #45, Gascue Santo Domingo, D.N., República
            Dominicana. 10201
          </p>
        </div>
        <div class="col-6 col-md-2">
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
