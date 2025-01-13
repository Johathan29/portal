<script setup>

import { ref, computed, onMounted } from 'vue';
const users = ref([]);
const itemUser = ref([]);
const grupoItem = ref([]);
const update=ref([]);
const url=ref([]);
url.value=window.location.hash;
  //https://jsonplaceholder.typicode.com/users
  onMounted(async () =>
  {
    const response = await fetch('https://dummyjson.com/users');
    users.value = await response.json();
    console.log((users.value.users))
    });

  //add infor in user
const AddUser=(lastname, firtsname,email)=>{
  if(lastname!=null || firtsname!=null || email!=null)
  {
    const id=users.value.users.length+1;
    const formulario=
    {
    id:id,
    firstName:firtsname,
    lastName: lastname,
    email:email,
  }
  console.log(formulario);
  users.value.users.push(formulario);
  users.value.users.sort((a,b)=> b.id - a.id);
  //update.value.push(users.value.users.find((animal) => animal.id === id).id);
  }
  onMounted(async ());
}
const detalleUser = (index) => {
 /* setTimeout(() => {
   grupoItem.value="";
  },'5000');*/

  itemUser.value = users.value.users.find((item) => item.id === index);
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
const UpdateItems=(firstname,ID,lastname,email)=>
{
  console.log(firstname,ID,lastname,email);
  if(firstname!='' || lastname!=='' )
  {
    users.value.users.filter(item =>item.id == ID ? item.firstName=firstname : item.firstName)
console.log(users.value.users);
  }
  else
  {
    users.value.users.filter(item =>item.id == ID ? firstname=item.firstName :item.firstName)
    
  }
  if( lastname!='')
  {
    
    users.value.users.filter(item =>item.id == ID ? item.lastName=lastname : item.lastName)
  }
  else
  {
    users.value.users.filter(item =>item.id == ID ? item.lastName : item.lastName)
  }
  if( email!=null)
  {
    
    users.value.users.filter(item =>item.id == ID ? item.email=email : item.email)
  }
  else
  {
    users.value.users.filter(item =>item.id == ID ? item.email : item.email)
  }
}

</script>
<template>
  <section class="bg-[url('../assets/vue.svg')] bg-left bg-no-repeat bg-cover bg-[length:250px_150px] bg-[#6b7280] p-16" v-if="url!=='#/'">
    <div class="container mx-auto">
      <h2 class="text-[2rem]">Testimonio </h2>
    </div>
  </section>
  <section class="bg-white p-4 text-left " v-else>
    <div class="container mx-auto">
      <h2 class="text-[2rem] text-[#223a31]">Testimonio </h2>
    </div>
  </section>
  <section class="title-section">
    <div class="container mx-auto">
   
      
  
      <div class="">
       <!----> 
       <div class="w-full" v-if="url!=='#/'">
        <button type="button" id="success" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" style="width: 30%;height: 4rem;"  data-bs-toggle="modal" data-bs-target="#addnew" data-bs-whatever="@getbootstrap">Añadir nuevo Testimonio</button>
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
                <div class="mb-3 md:flex sm:block items-baseline justify-between items-baseline ">
                  <label for="recipient-name" class="block sm:w-full mb-2 text-sm font-medium text-[#003775] dark:text-white md:w-[30%] text-left">Firts Name:</label>
                  <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  id="recipient-name" 
                      v-model="namefirts" required="true">
                </div>
                <div class="mb-3 md:flex sm:block items-baseline justify-between items-baseline text-left">
                  <label for="message-text" class="mb-3 md:flex sm:block w-[30%] font-400 text-left">Last Name:</label>
                  <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required type="text" id="message-text" v-model="namelast" >
                </div>
                <div class="mb-3 md:flex sm:block items-baseline justify-between items-baseline text-left">
                  <label for="message-text" class="mb-3 md:flex sm:block w-[30%] font-400 text-left">email:</label>
                  <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="email" id="message-text" v-model="emailreg" >
                </div>
              </div>
              <div class="modal-footer">
                    <button type="button" class="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800 mt-4" data-bs-dismiss="modal">Exit</button>
                    <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-4" data-bs-dismiss="modal" v-on:click="AddUser(namefirts,namelast,emailreg )">Add</button>
              </div>
            </form>
          </div>     
         </div>
        </div>
      </div>
      <div class="md:flex md:flex-wrap justify-center" >
        <div    v-for="(user,index) in  users.users "  :key="index"   >
          <div  v-if="url!=='#/testimonios'?index<=5:user.id" :class="['relative ','  p-[1rem] ','gap-[0.5rem]  ','items-center ','rounded-[0.25rem]',' m-2',' sm:w-full',' md:w-[19rem]','bg-'+user.eyeColor.toLowerCase() +'-700']" :current-page="currentPage">
          <img :src="user.image " class="card-img-top w-[5rem] text-center" alt="...">
          <div class="card-body">
            <h5 class="mb-1 text-[1.3rem] text-white">{{ user.firstName }}  {{ user.lastName }} </h5>
            <p class="text-black">{{ user.email }}</p>
      
            <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-4 "  data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap" v-on:mouseenter="detalleUser(user.id)">
                    Modificar Detalle
                  </button>
    <!--<a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-4">Modificar</a>-->
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
                 
                     <div class="mb-3 md:flex sm:block items-baseline justify-between">
                        <label for="recipient-name" class="mb-3 md:flex sm:block w-[30%] font-400">Firts Name:</label>
                        <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="recipient-name" :value="user.firstName"
                            @input="firstname= $event.target.value" >
                       </div>
                     <div class="mb-3 md:flex sm:block items-baseline justify-between">
                        <label for="message-text"  class="mb-3 md:flex sm:block w-[30%] font-400">Last Name:</label>
                        <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" id="message-text" :value="user.lastName"
                         @input="lastname= $event.target.value" >
                      </div>
                      <div class="mb-3 md:flex sm:block items-baseline justify-between">
                        <label for="message-text"  class="mb-3 md:flex sm:block w-[30%] font-400">Email:</label>
                        <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" id="message-text" :value="user.email"
                         @input="Email= $event.target.value" >
                      </div>
                <p>{{ user.id }}</p>
                  </div>
                
               <div class="modal-footer">
                  <button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" data-bs-dismiss="modal" v-on:click="Delete(index)">Delete</button>
                  <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" v-on:click="UpdateItems(firstname,user.id,lastname,Email)">Update</button>
                </div>
            </div>
          </div>
      </div>
    </div>
  </div>
      </div>
    </div>
</div>

</div>

<div class="py-5" v-if="url!=='#/testimonios'">
                <router-link to="/testimonios" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" style="">Ver más</router-link>
              </div>
</section>
</template>
<style>
button#success.btn-success{
background-color: #223a32 !important;
}
button#success.btn-success:hover{
background-color: #2c3f22 !important;
}
button.btn-primary {
    display: block;
    padding: 0.25rem;
    margin-block: 0.25rem;
    border-radius: 0.25rem;
    font-weight: 600;
    
    text-align: -webkit-center;
}
.bg-brown-700{
  background-color: rgba(76, 54, 13, 0.998);
}

.bg-hazel-700{
  background-color: #A19664;
}
.bg-amber-700{
  background-color: #FDB803;
}
.bg-violet-700{
background-color: violet;
}
</style>