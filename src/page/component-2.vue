<script setup></script>
<template>
   <p>
      Titulo: {{ title }} <br />
      
    </p>
    <p>
     
      Descripción: {{ description }} <br />
     
    </p>
    <p>
      Contenido: {{ contenido }}
    </p>
{{ item }}
</template>
<script>
export default {
  props: {

    title : String,
    description: String,
    contenido: String
  
  },
 watch:{
values(){
 item=[{
  'titulo' : this.title,
  'descripcion': this.description,
  'contenido' : this.contenido

}];
    }
  }
 
  };
</script>
