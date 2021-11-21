<template lang="pug">
.home
  .container
    .row
      .col-12
        h1 
          span SeaHam
          span.stroke.d-inline-block DAO 
        iframe( width="100%" height="300px" src="https://generator.artblocks.io/98000005")
      
        h4
          i Ultracured Hamillionaires, Hamily.
          | <br><br>- ArtBlocks Sea Hams Club - 
        p NFT curated community for
          a( target="_blank") http://artblocks.io/project/98  
        h3.mt-5 🚧 Under Conustruction
        ul.linkList
          li(v-for='item in items')
            a(:href="item.url" target="_blank") 
              i(:class="item.iconClasses")
              span {{item.title}}
        img.w-100(src="https://pbs.twimg.com/profile_banners/1422981005938466823/1630399981/1080x360")
        a(href="https://twitter.com/Nfdicted/status/1448766485267038208/photo/1" target="_blank")
        .mt-5  
          span.d-inline-block 2021@ SeaHamDAO &amp; Che-Yu Wu 
          span.d-inline-block All right reserved
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home', 
  data(){
    return {
      items: [
        {
          url: "https://twitter.com/sailobots",
          iconClasses: ['fas','fa-twitter'],
          title: "SeaHamDAO Twitter"
        },{
          url: "https://blog.floors.cafe/why-hams/",
          title: "Why Hams?"
        },{
          url: "https://discord.gg/N8e5wTeaxE",
          title: "SeaHamDAO Discord"
        },
        {
          url: "https://linktr.ee/cheyuwu",
          title: "Artist | Che-Yu Wu"
        }
      ]
    }
  }
}
</script>
<style lang="sass">
.home
  background-size: 40px 40px
  background-image:  linear-gradient(to right, #333 1px, transparent 1px),  linear-gradient(to bottom, #333 1px, transparent 1px)
  h1 
    font-size: 5rem
    font-weight: 900
    cursor: pointer
    .stroke
      color: transparent
      -webkit-text-stroke: 5px white
    &:hover
      .stroke 
        color: white
  pre
    color: white
  iframe
    border: none
    margin-top: 50px
  .linkList
    padding-left: 0
    list-style: none
    margin: 0
    margin-top: 60px
    margin-bottom: 30px
    a
      display: block
      border: solid 1px white
      color: white
      padding: 10px 20px
      font-size: 1.5rem
      border-radius: 10px
      margin-top: 20px
      &:hover
        background-color: white
        color: black
</style>
