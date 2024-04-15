<script setup>
import { DataSource } from "typeorm";
import HelloWorld from "./page/component-2.vue";
import Baselegal from "./page/base-legal.vue"
import Testimonio  from "./page/testimonio.vue";
import { View } from 'typeorm/schema-builder/view/View';
import { ref, computed, onMounted } from 'vue';
const users = ref(null);

const itemUser = ref([]);
const grupoItem = ref([]);
const dnone=ref('d-none');
const classtransform=ref();
const update=ref([])
  //https://jsonplaceholder.typicode.com/users
  onMounted(async () =>
  {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    users.value = await response.json();
    console.log(users.value)
    });
//view details of users
const detalleUser = (index) => {
  itemUser.value = users.value.find((item) => item.id === index);
  grupoItem.value = itemUser.value;
};
const viewaddress=()=>
     {
   dnone.value =='d-block' ? dnone.value='d-none' : dnone.value='d-block';
   dnone.value =='d-block' ?  classtransform.value='classtransform' :  classtransform.value='';
}
</script>

<template>
  <section class="title-section">
    <div class="container">
      <h2>Testimonio</h2>
      <div class="row">
        <div class="card m-2" :current-page="currentPage" style="width: 18rem;" v-for="(user,index) in users" :key="user.id"   >
            <!--<img src="..." class="card-img-top" alt="...">--> <i class="fa-solid fa-user-secret" style="font-size: 70px;"></i>
            <div class="card-body">
               <h5 class="card-title">
               {{ user.name }}  {{ user.username }}
                </h5>
                <p class="card-text">
                {{ user.email }}
                </p>
                <button class="btn btn-primary "  data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap" v-on:mouseenter="detalleUser(user.id)">
                  Ver Detalle
                </button>
                <div id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"
                 class=" modal fade" v-if="user.id === grupoItem.id">

                    <div class="modal-dialog">
                      <div class="modal-content" style="text-align: left;">
                          <div class="modal-header">
                            <h2 class="modal-title fs-5" >Detalles de datos </h2>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div class="modal-body">
                              <label for="recipient-name" class="col-form-label">Firts Name:</label> {{ user.name}}<br/>
                              <label for="message-text"  class="col-form-label">Last Name:</label> {{ user.username }}<br/>
                              <label for="message-text"  class="col-form-label">Email:</label> {{ user.email }}<br/>
                              <label for="message-text"  class="col-form-label" style="display: flex;align-items: baseline;" v-on:click="viewaddress"><p>Address</p> <i :class="'fas fa-sort-down ' + classtransform "></i></label> 
                              <div :class="dnone" > 
                              <p> calle: {{user.address.street }}</p>
                              <p> Suite: {{user.address.suite }}</p>
                              <p> Ciudad: {{user.address.city }}</p>
                              <p> Codigo Postal: {{user.address.zipcode }}</p>
                             </div>
                              <label for="message-text"  class="col-form-label">Last Name:</label> {{ user.company }}<br/>  

                             
                          </div>
                         
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-35">
                <router-link to="/testimonio" class="btn btn-success" style="">Ver Más</router-link>
              </div>
            </div>
          </div>
</section>

<div class="p-4">
<HelloWorld :monto="totalAmount" :taxes="totalTaxes"/>
<Baselegal v-on:value-changed="updateTotals" name="Monto de Nuevos prestamos"/>
</div>
</template>
<script>
  export default {
    data() {
      return {
        totalAmount: 0,
        totalTaxes: 0,
       }
      },
    computed: {
      rows() {
        return this.items.length;
      }
    },
    methods: {
     updateTotals(val, tax) 
     {
      this.totalAmount = val;
      this.totalTaxes = tax;
     },
    
    }
  }
</script>

<style>
th {
    width: 135px!important;
}
div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm{
  background-color: #76bd51!important;
  border: none!important;;
}
td.alert.alert-primary {
  float: inline-start;
  margin-left: -17rem;
  background: aliceblue;
 
}
div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm:focus{
  box-shadow: none!important;
}
.classtransform
{
  transform: rotate(180deg);}
.title {
  color: #fff;
  background: #195062;
  font-family: ui-monospace;
  font-weight: 600;
}
.btn-info {
  color: #0a262f !important;
  font-family: system-ui;
  background-color: #0dcaf0;
  border-color: #0dcaf0;
  font-size: small;
  font-weight: 700;
  text-transform: capitalize;
}
i.fa-solid.fa-user-secret {
    font-size: 70px;
    border: 1px solid;
    border-radius: 73px;
    padding: 2rem;
    background: #f0f6ff;
}
button.btn.btn-success{
  background-color: #76bd51!important;
  border:#76bd51;
  }
  button.btn.btn-success:hover{
  background-color: #6eb219 !important;
  border:#76bd51;
  }
  i.fas.fa-sort-down.classtransform {
    transition: 0.2s;
}
i.fas.fa-sort-down{
    transition: 0.2s;
}
</style>
