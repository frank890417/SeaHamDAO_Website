<template lang="pug">
.page.about.text-left
  .container
    .row
      .col-md-4
        h1.animated.fadeInUp 
          span Live <br> Ham
      .col-md-7
        iframe#liveham(
          width="100%",
          height="100%",
          src="/Hamily-Live-Face/98000611.htm",
          :key="$store.state.width"
        )
        br
        br
        snap By 
        a(href = "https://mobile.twitter.com/minimumfunction") Cin-Min, 
        a(href = "https://twitter.com/AnnChen0301") AjjNNA
      .col-md-1

</template>
<script>
export default {
  mounted() {
    let elHam = document.querySelector("#liveham");
    let ww = elHam.offsetWidth;
    let hh = elHam.offsetHeight;
    console.log("live")
    console.log([ww,hh])
    elHam.setAttribute("width", Math.max(ww,hh) + "px");
    elHam.setAttribute("height", Math.max(ww,hh) + "px");
    if(window.innerWidth<450){
      elHam.setAttribute("height", 700 + "px");
    }
    window.onresize = function(){
      let elHam = document.querySelector("#liveham");
      let ww = elHam.offsetWidth;
      let hh = elHam.offsetHeight;
      console.log("live")
      console.log([ww,hh])
      elHam.setAttribute("width", Math.max(ww,hh) + "px");
      elHam.setAttribute("height", Math.max(ww,hh) + "px");
      if(window.innerWidth<450){
        elHam.setAttribute("height", 700 + "px");
      }
    }
  },
};
</script>