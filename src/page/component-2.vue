<script setup></script>
<template>
   <p>
      Amount: {{ monto }} <br />
      
    </p>
    <p>
     
      Taxes: {{ taxes }} <br />
     
    </p>
    <p>
      Contenido: {{ contenido }}
    </p>

</template>
<script>
export default {
  props: {
    monto : Number,
    taxes: Number,
    contenido: String
  },
 
  };
</script>
