<script setup>

import { ref, computed, onMounted } from 'vue';
const users = ref(null);
const itemUser = ref([]);
const grupoItem = ref([]);
const update=ref([])
  //https://jsonplaceholder.typicode.com/users
  onMounted(async () =>
  {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    users.value = await response.json();
    console.log(users)
    });

//add infor in user
const AddUser=(lastname, firtsname,email)=>{
  const verificarEmail=users.value.filter(item => item.email==email);

  if(verificarEmail.length>= 1)
  {
    Swal.fire({
      title: 'Error al Registrarse?',
      text: "¡esta duplicado el correo electrónico!",
      icon: 'error',
      showCancelButton: false,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminarlo!',
    });
  }else{
    const id=users.value.length+1;
    const formulario=
    {
    id:id,
    name:firtsname,
    username: lastname,
    email:email,
  }
  users.value.push(formulario);
  update.value.push(users.value.find((animal) => animal.id === id).id);
  }
  
}
const detalleUser = (index) => {
 /* setTimeout(() => {
   grupoItem.value="";
  },'5000');*/

  itemUser.value = users.value.find((item) => item.id === index);
  grupoItem.value = itemUser.value;
};
// Delete items de user
const Delete = (index) => {
  if (index===0 )
   {
    Swal.fire({
      title: 'Estas Seguro?',
      text: "¡No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminarlo!',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Eliminado!',
          text: 'Tu archivo ha sido eliminado',
          icon: 'success',
        });
        users.value.shift();
        
      }
    });
  }
   else 
    {
      Swal.fire({
      title: 'Estas Seguro?',
      text: "¡No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminarlo!',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Eliminado!',
          text: 'Tu archivo ha sido eliminado',
          icon: 'success',
        });
        users.value.splice(index,1 );
        
      }
    });

    }
  
};
// update de user
const UpdateItems=(firtsname,ID,lastname)=>
{
  if(firtsname!=null )
  {
    users.value.filter(item =>item.id == ID ? item.name=firtsname : item.name)

  }
  else
  {
    users.value.filter(item =>item.id == ID ? item.name :item.name)
    
  }
  if( lastname!=null)
  {
    
    users.value.filter(item =>item.id == ID ? item.username=lastname : item.username)
  }
  else
  {
    users.value.filter(item =>item.id == ID ? item.username : item.username)
  }

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
                      <div class="modal-content">
                          <div class="modal-header">
                            <h2 class="modal-title fs-5" >Detalles de datos </h2>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div class="modal-body">
                              <div class="mb-3">
                                  <label for="recipient-name" class="col-form-label">Firts Name:</label>
                                  <input type="text" class="form-control" id="recipient-name" :value="user.name"
                                  @input="firtsname= $event.target.value" >
                              </div>
                              <div class="mb-3">
                                  <label for="message-text"  class="col-form-label">Last Name:</label>
                                  <input class="form-control" type="text" id="message-text" :value="user.username"
                                  @input="lastname= $event.target.value" >
                              </div>
                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-bs-dismiss="modal" v-on:click="Delete(index)">Delete</button>
                            <button type="button" class="btn btn-success" v-on:click="UpdateItems(firtsname,user.id,lastname)">Update</button>
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
 

  <div class="overflow-auto">
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
    ></b-pagination>

    <p class="mt-3">Current Page: {{ currentPage }}</p>
    

    <div>
      <table class="table table-striped">
        <thead>
          <tr>
    
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody  :per-page="perPage"
      :current-page="currentPage">
            <tr v-for="item in items" :key="item.id" >
        
            <td>{{ item.first_name}}</td>
            <td>{{ item.last_name }}</td>
            <td>{{ item.age }}</td>
            </tr>
          </tbody>
      </table>
    <table striped hover :items="items">
    
    </table>
  </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        perPage: 3,
        currentPage: 1,
        items: [
           { id: 1, first_name: 'Fred', last_name: 'Flintstone', age: 40 },
          { id: 2, first_name: 'Wilma', last_name: 'Flintstone' , age: 30 },
          { id: 3, first_name: 'Barney', last_name: 'Rubble' , age: 20 },
          { id: 4, first_name: 'Betty', last_name: 'Rubble', age: 40  },
          { id: 5, first_name: 'Pebbles', last_name: 'Flintstone', age: 70  },
          { id: 6, first_name: 'Bamm Bamm', last_name: 'Rubble' , age: 44 },
          { id: 7, first_name: 'The Great', last_name: 'Gazzoo' , age: 30 },
          { id: 8, first_name: 'Rockhead', last_name: 'Slate', age: 29  },
          { id: 9, first_name: 'Pearl', last_name: 'Slaghoople' , age: 10 }
        ]
      }
    },
    computed: {
      rows() {
        return this.items.length;
      }
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
</style>
