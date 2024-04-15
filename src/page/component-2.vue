<script setup></script>
<template>
  <p>
      Amount: {{ monto }} <br />
      Taxes: {{ taxes }}
    </p>

</template>
<script>
export default {
  props: {
    monto : Number,
    taxes: Number
  },
 
  };
</script>
