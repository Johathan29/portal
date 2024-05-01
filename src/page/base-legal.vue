<script setup></script>
<template>
<div>
      {{ name }}
      <form class="form-align">
     <label class=" d-flex col-12 align-center"> 
        <span class="col col-2 d-block">Titulo:</span>
        <input type="number" class="col-8 m-2"
        step="100"  v-model.number="value"/>
     </label>
     <label class="d-flex col-12 align-center">
        <span  class="col col-2 d-block"> Descripción:</span> 
        <input type="text" class="col-8 m-2"
        v-model.text="value" />
     </label>
     <label class="d-flex col-12 align-center" > 
        <span  class="col col-2 d-block">Contenido:</span>  
        <textarea  class="col-8 m-2" cols="">{{ value }}</textarea>
     </label>
        <input type="button" class="btn btn-success"
        value="Enviar" />
</form> 
</div>
</template>
<script>
export default {
  props: {
    name : String,
  },
  data(){
    return {
      value: 1500,
    }
  },
computed: {
    tax() {
      return this.value * 0.2;
    }
  },
  watch: {
    value() {
      this.$emit('value-changed', this.value , this.tax);
    console.log(this.tax);
    },
    created() {
    this.$emit('value-changed', this.value, this.tax);
    console.log(this.value);
  }

  },
  };
</script>
<style>
form.form-align {
    text-align: left;
}
label.align-center{
    align-items: center;
}
textarea.col-8.m-2 {
    background: white;
    border-radius: 4px;
    border: 1px solid #d5dae1;
}
</style>
