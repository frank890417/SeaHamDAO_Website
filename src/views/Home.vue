<template lang="pug">
.page
  .container-fluid
    .row
      .col-12.col-md-6 
        img.w-100(src="/index_thehamily.png")
      .col-12.col-md-6
        iframe#superham.w-100(width="100%" height="800px" src="/sketch1338290/index.html")
        h4.strokeText @SuperHamHolder
</template>
<script>
export default {
  mounted(){
    let elHam = document.querySelector("#superham")
    let ww= elHam.offsetWidth
    elHam.setAttribute("height",ww+"px")
  }
}
</script>
<style lang="sass">
    
</style>