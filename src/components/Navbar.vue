<template lang="pug">
div.nav-container 
  nav.px-5(:class="{open:navOpen}", @click="navOpen=false")
    ul
      li(v-for="item in items")
        router-link(:to="item.url") {{item.label}}
      li
        a.link-social(href="https://twitter.com/sailobots" target="_blank").mr-4
          i.fab.fa-twitter
        a.link-social(href="https://discord.gg/nTtCmkQEJa" target="_blank").mr-4
          i.fab.fa-discord
        a.link-social(href="mailto:hello@hamily.life" target="_blank")
          i.fas.fa-envelope
    img.bg-strokeham(src="/about_strokeham.svg")
  router-link(to="/")
    img.logo(src="hamLogo.svg")
  .d-md-none.toggle(@click="navOpen=!navOpen")
    .icon(v-if="navOpen")
      i.fas.fa-times
    .icon(v-if="!navOpen")
      i.fas.fa-bars 
</template>

<script>
export default {
  data(){
    return {

      navOpen: false,
      items: [
        {
          url: "/about",
          label: "About"
        },{
          url: "/artist",
          label: "Artist"
        },
        {
          url: "/news",
          label: "News"
        },
        {
          url: "/memes",
          label: "Memes"
        },{
          url: "/hamiverse",
          label: "Hamiverse"
        },
        // {
        //   url: "/contact",
        //   label: "Contact"
        // }
      ]
      
    }
  }
}
</script>

<style lang="sass">

// $grid-breakpoints: (
//   xs: 0,
//   sm: 576px,
//   md: 768px,
//   lg: 992px,
//   xl: 1200px
// ) !default;
nav
  // float: right
  padding: 20px
  display: flex
  justify-content: flex-end 
  .closeBtn
    position: fixed 
    right: 0
    top: 0
    font-size: 30px
    
  ul
    list-style: none
    display: flex
    justify-content: flex-end
    li 
      margin-left: 50px
      font-size: 1.4rem
      font-weight: 900
      
      a
        color: white
        &:hover
          color: white
        &.router-link-exact-active
          color: transparent
          -webkit-text-stroke: 1px white
          
      
  .bg-strokeham
    display: none
  @media only screen and (max-width: 768px)
    
    position: fixed
    left: 0
    top: 0
    width: 100%
    height: 100%
    align-items: center
    z-index: 500
    background-color: black
    display: none
    opacity: 0
    &.open
      display: block  
      opacity: 1
    .bg-strokeham
      position: absolute
      width: 100%
      left: 0
      bottom: 0
      pointer-events: none
      opacity: 0.8
      transform: rotate(30deg)
      
    .logo
      position: fixed
      left: 50px
      top: 50px
      width: 80px

    ul 
      flex-direction: column
      justify-content: center
      align-items: flex-start
      width: 100%
      height: 100%
      padding: 0
      text-align: left
      li 
        font-size: 4rem
        margin-left: 0
        a
          text-align: left

.logo
  position: absolute
  top: 20px
  left: 20px
  width: 100px
  margin: 10px

  &:hover
    transform: scale(1.1) rotate(5deg) 

.toggle
  position: fixed
  right: 25px
  top: 20px
  color: white
  z-index: 500
  font-size: 15vw 


</style>