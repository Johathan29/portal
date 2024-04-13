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
    console.log(users.value)
    });

//add infor in user
const AddUser=(lastname, firtsname,email)=>{
  if(lastname!=null || firtsname!=null || email!=null)
  {
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
      <h2>Testimonio de los clientes</h2>
      <div class="row">
       <!----> 
       <div class="w-100">
        <button type="button" class="btn btn-primary" style="width: 30%;height: 4rem;"  data-bs-toggle="modal" data-bs-target="#addnew" data-bs-whatever="@getbootstrap">Añadir nuevo Testimonio</button>
        <div id="addnew" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"
          class=" modal fade">
    <div class="modal-dialog">
      <div class="modal-content">
          <div class="modal-header">
             <h2 class="modal-title fs-5" >Completar Formulario</h2>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
            <form>
               <div class="modal-body">
               
                     <div class="mb-3">
                        <label for="recipient-name" class="col-form-label">Firts Name:</label>
                        <input type="text" class="form-control"  id="recipient-name" 
                            v-model="firtsname" required="true">
                       </div>
                     <div class="mb-3">
                        <label for="message-text" class="col-form-label">Last Name:</label>
                        <input class="form-control" required type="text" id="message-text" v-model="lastname" >
                      </div>
                      <div class="mb-3">
                        <label for="message-text" class="col-form-label">Last Name:</label>
                        <input class="form-control" type="email" id="message-text" v-model="email" >
                      </div>
                  </div>
                  
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Exit</button>
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal" v-on:click="AddUser(firtsname,lastname,email )">Add</button>
                   </div>
                   </form>
                </div>
                
          </div> 
          
     </div>
</div>
       <div class="card m-2" :current-page="currentPage" style="width: 18rem;" v-for="(user,index) in users" :key="user.id"   >
 <!--<img src="..." class="card-img-top" alt="...">-->
         <i class="fa-solid fa-user-secret" style="font-size: 70px;"></i>
    <div class="card-body">
    <h5 class="card-title">{{ user.name }}  {{ user.username }}</h5>
    <p class="card-text">{{ user.email }}</p>
    {{ user.id }}
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
                        <label for="message-text"  class="col-form-label">Last Name:</label>
                        <input class="form-control" type="text" id="message-text" :value="user.username"
                         @input="lastname= $event.target.value" >
                      </div>
                <p>{{ user.id }}</p>
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
</div>
<router-link to="/testimonio" class="btn btn-success" style="">Ver Más</router-link>
</div>

</section>
</template>
