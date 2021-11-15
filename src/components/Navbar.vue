<template lang="pug">
div
  nav.px-5
    router-link(to="/")
      img.logo(src="hamLogo.svg")
    ul
      li(v-for="item in items")
        router-link(:to="item.url") {{item.label}}
</template>

<script>
export default {
  data(){
    return {
      items: [
        {
          url: "/about",
          label: "About"
        },
        // {
        //   url: "/news",
        //   label: "News"
        // },
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
nav
  // float: right
  padding: 20px
  display: flex
  justify-content: space-between
  .logo
    width: 100px
    &:hover
      transform: scale(1.1) rotate(5deg) 
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
        &.router-link-exact-active
          color: transparent
          -webkit-text-stroke: 1px white
        &:hover
          color: white
          
      
</style>