<template>
  <div id="nav">
    <!-- <router-link to="/">Home</router-link> | -->
    <!-- <router-link to="/about">About</router-link> -->
  </div>
  <router-view/>
</template>

<style lang="scss">
@import "~bootstrap/scss/bootstrap";
html,body{
  overflow-x: hidden;
  margin: 0;
  padding: 0;
  color: white;
  font-size: 18px;
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
</style>
