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
        iframe#liveham.w-100(
          width="100%",
          height="800px",
          src="/Hamily-Live-Face/98000611.htm",
          :key="$store.state.width"
        )
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
    elHam.setAttribute(ww + "px", ww + "px");
  },
};
</script>