<template lang="pug">
.page.home.pt-5
  .container
    .row
      .col-12.col-lg-6.order-sm-1
        iframe#superham.w-100(
          width="100%",
          height="800px",
          src="/sketch1338290/index.html",
          :key="$store.state.width"
        )
        //- br
        //- h3 {{ $store.state }}
        h4.strokeText @thevelvetrut
      .col-12.col-lg-6
        img.w-100(src="/index_thehamily.png")
</template>
<script>
export default {
  mounted() {
    let elHam = document.querySelector("#superham");
    let ww = elHam.offsetWidth;
    elHam.setAttribute("height", ww + "px");
  },
};
</script>
<style lang="sass">
.page.home
  .container
    max-width: 1600px
</style>