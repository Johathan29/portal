<script setup>
import { ref, computed, onMounted } from 'vue';
const users = ref(null);
const capturar = ref();
const itemUser = ref([]);
const grupoItem = ref([]);
  //https://jsonplaceholder.typicode.com/users
onMounted(async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  users.value = await response.json();
  console.log(users.value)
});

const detalleUser = (index) => {
 /* setTimeout(() => {
   grupoItem.value="";
  },'5000');*/

  itemUser.value = users.value.find((item) => item.id === index);
  grupoItem.value = itemUser.value;
};
const UpdateItems=(firtsname,ID,lastname)=>{
  if((firtsname!=null && lastname!=null) &&(firtsname!=null || lastname!=null)){
    users.value.filter(item =>item.id == ID ? item.name=firtsname : '')
    users.value.filter(item =>item.id == ID ? item.username=lastname : '')
  }
  else{
    users.value.filter(item =>item.id == ID ? item.name:'')
    users.value.filter(item =>item.id == ID ? item.username : '')
  }

} 
const DeleteItems=()=>{}
</script>

<template>
  <section class="title-section">
    <div class="container">
      <h2>Testimonio</h2>
      <div class="row">
       <!----> <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap">Open modal for @getbootstrap</button>
       <div class="card m-2" style="width: 18rem;" v-for="user in users" :key="user.id">
 <!--<img src="..." class="card-img-top" alt="...">-->
         <i class="fa-solid fa-user-secret" style="font-size: 70px;"></i>
    <div class="card-body">
    <h5 class="card-title">{{ user.name }}  {{ user.username }}</h5>
    <p class="card-text">{{ user.email }}</p>
    <button class="btn btn-primary "  data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap" v-on:mouseenter="detalleUser(user.id)">
            Modificar Detalle
          </button>
    <!--<a href="#" class="btn btn-primary">Modificar</a>-->
    <div id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"
          class=" modal fade"
         
          v-if="user.id === grupoItem.id"
        >

        <div class="modal-dialog">
           <div class="modal-content">
              <div class="modal-header">
                <h2 class="modal-title fs-5" >Cambios de datos </h2>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                 </div>
               <div class="modal-body">
                 
                     <div class="mb-3">
                        <label for="recipient-name" class="col-form-label">Firts Name:</label>
                        <input type="text" class="form-control" id="recipient-name" :value="user.name"
                            @input="firtsname= $event.target.value" >
                       </div>
                     <div class="mb-3">
                        <label for="message-text" class="col-form-label">Last Name:</label>
                        <input class="form-control" type="text" id="message-text" :value="user.username"
                         @input="lastname= $event.target.value" >
                      </div>
                
                  </div>
               <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary" v-on:click="UpdateItems(firtsname,user.id,lastname )">Send message</button>
                </div>
            </div>
          </div>
      </div>
    </div>
   </div>
</div>
</div>

       <!-- <div class="modal-dialog">
          <input type="text" class="w-100" :value="user.name"
  @input="firtsname= $event.target.value" >
          <input type="text" class="w-100" :value="user.username"
  @input="lastname = $event.target.value" >
            {{ user.id }}
          <button class="btn text-success m-2 p-1 " v-on:click="UpdateItems(firtsname,user.id,lastname )"><i class="fa-solid fa-circle-check"></i></button>
          <button class="btn text-danger m-2 p-1" v-on:click="DeleteItems(firtsname,user.id,lastname )"><i class="fa-solid fa-trash"></i></button>
        </div>-->
   
</section>
 <!-- <h2 class="title">Listado de Usuarios</h2>
  <table class="table table-striped">
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Nombre</th>
        <th scope="col">Apellido</th>
        <th scope="col">Email</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="user in users" :key="user.id">
        <th scope="row">{{ user.id }}</th>
        <td>{{ user.name }}</td>
        <td>{{ user.username }}</td>
        <td>{{ user.email }}</td>
        <td>
          <button class="btn btn-info "  @click="detalleUser(user.id)">
            Detalle
          </button>
        </td>
        <td
          class="alert alert-primary h-auto"
          role="alert"
          v-if="user.id === grupoItem.id"
        >
          <input type="text" class="w-100" :value="user.name"
  @input="firtsname= $event.target.value" >
          <input type="text" class="w-100" :value="user.username"
  @input="lastname = $event.target.value" >
            {{ user.id }}
          <button class="btn btn-warning m-2 p-1" v-on:click="UpdateItems(firtsname,user.id,lastname )">Modificar</button>
          <button class="btn btn-danger m-2 p-1" v-on:click="DeleteItems(firtsname,user.id,lastname )">Eliminar</button>
        </td>
      </tr>
    </tbody>
  </table>-->
</template>
<style>
th {
    width: 135px!important;
}
td.alert.alert-primary {
  float: inline-start;
  margin-left: -17rem;
  background: aliceblue;
 
}
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
</style>
