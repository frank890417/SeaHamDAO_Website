<template lang="pug">
.page.about.text-left
  .container
    .row
      .col-md-7
        h1.animated.fadeInUp 
          span Live
          br
          span.strokeText TRY ON
    .row
      .col-12
        iframe#liveham.w-100(
          width="100%",
          height="800px",
          src="/liveham/index.html",
          :key="$store.state.width"
        )
</template>
<script>
export default {
  mounted() {
    let elHam = document.querySelector("#liveham");
    let ww = elHam.offsetWidth;
    elHam.setAttribute("height", ww + "px");
  },
};
</script>