<template lang="pug">
.page.about.text-left
  .container
    .row
      .col-md-7
        h1.animated.fadeInUp 
          span Live
          br
          span.strokeText TRY ON
    .row.justify-content-center
      .col-md-10
        iframe#liveham(
          width="100%",
          height="750px",
          src="/Hamily-Live-Face/98000611.htm",
          :key="$store.state.width"
        )
        br
        br
        snap By 
        a(href = "https://mobile.twitter.com/minimumfunction") CinMin, 
        a(href = "https://twitter.com/AnnChen0301") AjjNNA

</template>
<script>
export default {
  mounted() {
    let elHam = document.querySelector("#liveham");
    let ww = elHam.offsetWidth;
    let hh = elHam.offsetHeight;
    console.log([ww,hh])
    elHam.setAttribute("width", ww + "px");
    if(window.innerWidth<450){
      elHam.setAttribute("height", ww + "px");
    }
    // iframe.setAttribute("height",ww+"px")
  },
};
</script>