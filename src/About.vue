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
  console.log(users.value);
});

const detalleUser = (index) => {
 /* setTimeout(() => {
   grupoItem.value="";
  },'5000');*/

  itemUser.value = users.value.find((item) => item.id === index);
  grupoItem.value = itemUser.value;
  
 
  console.log(grupoItem.value);
};
const Modificar=(firtsname,ID,lastname)=>{
  users.value.filter(item =>item.id == ID ? item.name=firtsname : '')
  users.value.filter(item =>item.id == ID ? item.username=lastname : '')
}
</script>

<template>
  <h2 class="title">Listado de Usuarios</h2>
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
          <button class="btn btn-warning" v-on:click="Modificar(firtsname,user.id,lastname )">Modificar</button>
        </td>
      </tr>
    </tbody>
  </table>
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
</style>
