<script >
import { ref} from 'vue'
const valores=ref([]);
const titul=ref('bg-info');
const color=ref('');
 export default {
  props: {

    title : String,
    description: String,
    contenido: String,
    id:Number
  
  },
  setup() {
    return {
      count: ref(),
      Estado:ref(''),
      items:ref(),
      color:ref(),
      
    }
  },
  data(){
    return{
      
      selected:'',
      options:["Activo","En Proceso","Eliminar"],
      activo:"" ,
      titul:'bg-info',
      valor:[],
      item:this.items
    }
  },
    computed: {
    calculateBooksMessage()
    {
     
      const item={
      'id': this.id,
      'titulo' : this.title,
      'descripcion': this.description,
      'contenido' : this.contenido,
      'estado' : ""
      }
      this.titulo=item;
      valores.value.push(this.titulo); 
      return valores.value;

    },
    updateTasks()
    {
      const titul="prueba";
      return titul;
    },
    
   
},
methods:{
  /*varificar(selector){
    if(selector){
     return this.selected , this.options=["Activo","En Progreso","Eliminar"];
    }
    
   

    
}*/
varificar(index){
   
   this.options=["Activo","En Proceso","Eliminar"];
  },
/*confirmar(index,estado){
    const titul='';
    this.valor=valores.value;
    const items= this.valor.find(item => item.id== index);
    items.estado=estado;
    valores.value.push(item=> item.id== index ? item.estado=items.estado : items.estado)
    console.log(items.estado, estado,index)
    this.activo="bg-info" 
      if(estado=="Activo" && index==items.id)
        {
         this.activo="bg-success";
        this.titul="";
        alert(this.activo);
    } else if(estado=="En Proceso"){
      this.activo="bg-warning";
      this.titul="";
      alert(this.activo);
    }
    return this.activo;
  }*/
  confirmar(id,selector)
  {
    
    
        this.valor=valores.value;
        this.item= this.valor.filter(item => item.id== id ? item.estado=selector :'' );
        
        this.Estado=this.item.find(item => item.id== id ).estado;
        this.count=this.item.find(item => item.id== id ).id;
        console.log(this.Estado,this.count);
       // alert(this.Estado);
       if(this.Estado=="Activo"){
        this.color="bg-success"
       } else{
        this.color="bg-info"
       }
       
        return  this.color
}
}
}
  
</script>
<template>
 
 
  <div v-for="(list,index) in calculateBooksMessage" :key="index" 
    :class="['p-2','task','col-md-4','col-12',index==0 ? 'd-none':'',this.Estado==list.estado && this.count==list.id ? color :'' ]"  >
      <div class="d-flex header-info">
        <h4 class="titletask">{{   list.titulo }} {{ Estado }} {{ list.estado }}</h4> 
        <select class="form-control" :id="index" v-model="selected" v-on:change="varificar(index)" >
          <option v-for="option in  options"
          :value="option">
          {{option}}
          </option>
         
        </select>
       
      </div>
        <p>{{ list.descripcion }}</p>
        <p>{{ list.contenido }}</p>
        <button class="btn border-danger text-danger p-1" @click="confirmar(list.id,selected)" >
            <i class="fa-solid fa-xmark"></i>
        </button>
    </div>   

</template>

<style>
    h4.titletask {

        font-weight: 600;
        width: 100%;
      
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
