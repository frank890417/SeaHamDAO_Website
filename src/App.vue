<template lang="pug">
div
  Navbar
  router-view
  footer.mt-5
    .text-center Che-Yu Wu &amp; The Hamily @ All right reserved
</template>

<style lang="scss">
@import "~bootstrap/scss/bootstrap";
html,body{
  overflow-x: hidden;
  margin: 0;
  padding: 0;
  color: white;
  font-size: 18px;
  background-color: black;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: black;
  padding-bottom: 100px;
  color: white;

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

.strokeText{
  color: transparent;
  -webkit-text-stroke: 1px white;
  font-weight: 900;
}
</style>
