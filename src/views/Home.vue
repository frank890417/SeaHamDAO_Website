<template lang="pug">
.page
  .container-fluid
    .row
      .col-12.col-lg-6.order-sm-1
        iframe#superham.w-100(width="100%" height="800px" src="/sketch1338290/index.html")
        br
        h4.strokeText @SuperHamHolder
      .col-12.col-lg-6
        img.w-100(src="/index_thehamily.png")
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