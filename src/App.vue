<template lang="pug">
div.text-left
  Navbar 
  metainfo
    template(v-slot:title="{ content }") {{ content ? `${content} | SITE_NAME` : `SITE_NAME` }}
  transition(name="page")
    router-view.pageframe(:key="$router.path")
  Footer
</template>

<script>
//https://stackoverflow.com/questions/66228340/how-to-use-vue-3-meta-with-vue-js-3
// import { useMeta } from 'vue-meta'
import Footer from "@/components/Footer";
export default {
  // setup(){
  //    useMeta({
  //     title: '',
  //     htmlAttrs: { lang: 'en', amp: true }
  //   })
  // },
  components: {
    Footer
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
@import "~bootstrap/scss/bootstrap";

html,
body {
  overflow-x: hidden;
  margin: 0;
  padding: 0;
  color: white;
  font-size: 18px;
  background-color: black;
  @media only screen and (max-width: 768px) {
    font-size: 15px;
  }
}

.pageframe {
  min-height: 100vh;
  padding-top: 0px;

  @media only screen and (max-width: 768px) {
    margin-top: 100px;
  }
}
.container {
  max-width: 1400px;
}

#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: black;
  padding-bottom: 100px;
  color: white;
}

iframe {
  border: none;
}
.btn.btn-primary {
  background-color: white;
  color: black;
  padding: 10px 30px;
  font-weight: 900;
  border-radius: 0;
  transition: 0s;
  border: solid 2px white;
  &:hover,
  &:active {
    background-color: black;
    color: white;
  }
}

a {
  color: white;
  &:hover {
    color: white;
  }
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: white;

    &.router-link-exact-active {
      color: white;
    }
  }
}

.strokeText {
  color: transparent;
  -webkit-text-stroke: 1px white;
  font-weight: 900;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 900;
}
h1 {
  font-size: 7rem;
  @media only screen and (max-width: 768px) {
    font-size: 5rem;
  }
}
h2 {
  font-size: 4rem;
  @media only screen and (max-width: 768px) {
    font-size: 3rem;
  }
}
h3 {
  font-size: 3rem;

  @media only screen and (max-width: 768px) {
    font-size: 2.5rem;
  }
}

.page.page-enter-active,
.page.page-leave-active {
  transition: 0.5s !important;
  opacity: 1;
}
.page.page-enter, .page.page-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0 !important;
}
</style>
