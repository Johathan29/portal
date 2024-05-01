
<template>
{{ monto }} 
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
  prop: {
    monto : String,
  },

}
</script>
<style scoped>
.read-the-docs {
  color: #888;
}
</style>
