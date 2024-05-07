<script>
import { ref} from 'vue'
const valores=ref([]);
const titul=ref();

 export default {
  props: {

    title : String,
    description: String,
    contenido: String
  
  },
  data(){
    return{
selectedo:'',
options:["Activo","En Progreso","Eliminar"]
    }

  },

  computed: {
    calculateBooksMessage(){
      const item={
    
  'titulo' : this.title,
  'descripcion': this.description,
  'contenido' : this.contenido,
  'estado' : "Activo"
}
this.titulo=item;
valores.value.push(this.titulo); 
return valores.value;

    },
    updateTasks(){
 const titul="prueba";
 return titul;
    }
}
}
  ;
</script>
<template>
   <div v-for="(list,index) in calculateBooksMessage" :key="index"  :class="['p-2','task','col-md-4','col-12',index==0?'d-none':'']"  >
      <div class="d-flex header-info">
        <h4 class="titletask">{{   list.titulo  }} </h4> 
        <select class="form-control" :required="true">
  <option 
   v-for="option in options" 
   v-bind:value="option"
   :selected="option == 'Activo'"
  >{{ option }}</option>
</select>
      </div>
        <p>{{ list.descripcion }}</p>
        <p>{{ list.contenido }}</p>
        <button class="btn border-danger text-danger p-1" >
            <i class="fa-solid fa-xmark"></i>
        </button>
    </div>    
</template>

<style>
    h4.titletask {
        color: #223a32;
        font-weight: 600;
      
    }
    .task {
        border-right: 2px solid #c2c2c2a1;
    }
    button.btn.border-danger.text-danger.p-1{
        border: 1px solid;
        opacity: 0.2;
    }
    button.btn.border-danger.text-danger.p-1:hover {
        border: 1px solid;
        opacity: 1;
    }
    button.btn.border-danger.text-danger.p-1:focus{
      box-shadow: none;
    }
    .header-info {
        justify-content: space-between;
        border-bottom: 2px solid #c2c2c234;
        /* padding-bottom: 1rem; */
        align-items: baseline;
    }
    select.btn-warning ,select.btn-success,select.btn-success:hover,select.btn-success:focus,.btn-info,.btn-danger{
        padding: 0.3rem;
        color: #000;
        border-radius: 3px;
        /* color: white; */
        font-weight: 700;
    }
</style>
