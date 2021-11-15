<template lang="pug">
div.text-left
  Navbar
  router-view
  footer.mt-5
    .text-center Che-Yu Wu &amp; The Hamily @ All right reserved
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
@import "~bootstrap/scss/bootstrap";
html,body{
  overflow-x: hidden;
  margin: 0;
  padding: 0;
  color: white;
  font-size: 18px;
  background-color: black;
}
.container{
  max-width: 1400px;
}

#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: black;
  padding-bottom: 100px;
  color: white;

}

iframe{
  border: none

}
.btn.btn-primary{
  background-color: white;
  color: black;
  padding: 10px 30px;
  font-weight: 900;
  border-radius: 0;
  transition: 0s;
  border: solid 2px white;
  &:hover,&:active{

    background-color: black;
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

.strokeText{
  color: transparent;
  -webkit-text-stroke: 1px white;
  font-weight: 900;
}
h1,h2,h3,h4,h5,h6{
  font-weight: 900;
}
h1{
  font-size: 7rem;
}
h2{
  font-size: 5rem;
}
h3{
  font-size: 3rem;
}

</style>
