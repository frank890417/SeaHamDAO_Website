<template lang="pug">
.page.hamiverse
  .container
    .row
      .col-12
        h1 HAMIVERSE
          .strokeText &amp;HAMILY
    .row.pt-5.pb-5.mt-5.mb-5
      .col-12.col-md-7
        h2.mt-5 The original Ham
        p sail-o-bots is based on the original generative project Strange Robots by Che-Yu Wu
        a.btn.btn-primary(href="https://opensea.io/assets/art-blocks-factory?search[query]=Sail-o-bot&search[sortAscending]=true&search[sortBy]=PRICE",
                          target="_blank") View Collection

      .col-12.col-md-5
        iframe( width="100%" height="300px" src="https://generator.artblocks.io/98000005")
      img.bg-deco.deco-1(src="/hamiverse_deco_1.svg")
    .row.pt-5.pb-5.mt-5.mb-5
      .col-12.col-md-7.order-2
        h2.mt-5 CRAFT HAMS
        p The handdrawn collection of hams by Che-Yu,<br>Randomly giving to the best active community members in the hamily
        a.btn.btn-primary(href="https://opensea.io/collection/crafthams",
                          target="_blank") View Collection
      .col-12.col-md-5
        img.w-100(src="https://lh3.googleusercontent.com/a182BFcMO-Y9CnnyPnpzBcfX-YN3uO1uH7Pr5F4e9XrOHg7bZXnMjFgUhTfqb2BGdmTXfJlnjJdcYWx1yntjmAQdPLwuVt_jrNqx2w=w548")
      img.bg-deco.deco-2(src="/hamiverse_deco_2.svg")
    .row.pt-5.pb-5.mt-5.mb-5
      .col-12.col-md-7
        h2.mt-5 CRYPTO POCHI
        p CryptoPochi is an interactive NFT project that captures your daily life emotions and shapes. They laugh, cry, being lazy all the times.
        a.btn.btn-primary(href="https://opensea.io/collection/cryptopochi",
                          target="_blank") View Collection
      .col-12.col-md-5
        iframe( width="100%" height="300px" src="https://cryptopochi.com/os/os-action.html?tokenHash=0x2cb92b7a1828031c5e2cfbd9d5fadb227aac000fa642d071fc6c3518432c6d4e")
      img.bg-deco.deco-3(src="/hamiverse_deco_3.svg")
    .row.pt-5.pb-5.mt-5.mb-5
      .col-12.col-md-7.order-2
        h2.mt-5 Che-Yu Wu
          .strokeText x Nobody
        p Generative Artists Che-Yu Wu and Nobody come together and spread the story of a false-alarm rescue misson! 
        a.btn.btn-primary(href="https://opensea.io/collection/cheyuwuxnobody",
                          target="_blank") View Collection
      .col-12.col-md-5
        iframe( width="100%" height="300px" src="https://nobodyeth.art/images/blackwhite.html")
      img.bg-deco.deco-4(src="/hamiverse_deco_4.svg")
</template>

<script>
export default {
  mounted(){
    let iframes = document.querySelectorAll("iframe")

    iframes.forEach(iframe=>{
      let ww= iframe.offsetWidth
      iframe.setAttribute("height",ww+"px")

    })
  }
}
</script>

<style lang="sass">
.hamiverse
  h2,p
    background-color: black
  .row
    position: relative
    &>[class^='col']
      z-index: 1
  
  .bg-deco
    position: absolute
    width: 100%
    bottom: 0
    
    
    &.deco-1
      bottom: -20vh 
    &.deco-2
      width: 70%
      max-width: 900px
    &.deco-3
      width: 40%
      max-width: 400px
</style>