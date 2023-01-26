<template lang="pug">
.page
  .container
    .row 
      .col-12
        h1.animated.fadeInUp 
          span MEMES
        a(href="https://twitter.com/robotlovecoffee" target="_blank") Page originally contributed by @robotlovecoffee
        br
        br
          //- br
          //- .strokeText BEST HAM & POCHI<br>MEMES
  .container-fluid
  //- .album.py-5.bg-dark
  .container-fulid
    //src='(.*?)'[\S\s]*?fs-6\n.*?\| (.*) by[\S\s]*?\| (\@.*)
    div(v-masonry="containerId" transition-duration="0.5s" item-selector=".item")
      .item(v-masonry-tile).col-lg-4.p-0(v-for="meme in memedata")
        Tilt.card
          img(:src='meme.src' alt='')
          .card-body
            p.card-text.fs-6
              | {{meme.title}} by 
              small
                a( target='_blank' :href='`https://twitter.com/${meme.author}`')
                  | {{meme.author}} 
                  i.fab.fa-twitter
                a.download(:href='meme.src' download='')
                  i.fas.fa-arrow-down
    
</template>

<script>
import memedata from "@/assets/memedata.json";
export default {
  data: () => ({
    memedata
  }),
  mounted() {}
};
</script>

<style lang="sass">
.card
  background-color: transparent
  padding: 10px
  .card-body
    background-color: rgba(255,255,255,0.2)
    // filter: blur(10px)
    // backdrop-filter: blur(10px)
    color: white
    font-size: 1rem
    p
      font-weight: 700
      a
        font-weight: 300
    *
      color: white
    .download
      width: 35px
      height: 35px
      display: flex
      justify-content: center
      align-items: center
      float: right
      border: solid 1px
      border-radius: 50%
      transition: 0.1s
      &:hover
        transform: scale(1.5)
        // background-color: #fff
        background-color: black
        filter: invert(100%)
</style>