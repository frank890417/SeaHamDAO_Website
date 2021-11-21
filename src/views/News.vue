<template lang="pug">
.page.news
  .container
    .row 
      .col-12
        h1.animated.fadeInUp 
          span About
          br
          .strokeText HAMILY UPDATE
    .row 
      .col-sm-5
        img.w-100(src="https://openprocessing-usercontent.s3.amazonaws.com/thumbnails/visualThumbnail1338290@2x.jpg?hash=20211121093650")
      .col-sm-7
        .news-info
          h3.date.news-date 2021/11/21
          h2.news-title 
            span.line THE ATOM OF HAM
            br
            span.line START AUCTION
      .col-12.mt-5
        p Sail-o-bots try to combine but also spare concepts, perceptions and even basic human need based on Maslow's hierarchy. They are the mischief of the sea, have their own tiny boats to sail but they prefer to stand still, and watch the sunset. Until the next day comes, Sail-o-bots wait, they do not eat, they do not sleep, that's why they are on edge from time to time. Do not judge them quickly. Each bot has its own messages if you want to take or they are just shiny stuff you can stare at. Sail-o-bots cannot stay at a same style, that is who they are, they might be called inconsistent, but it has advantages, having multiple disciplines is really important for them, they will never stop trying to discover more. They will always be going back and forward around several versions, do not think that they will stop at one since they discover themselves, which is probably never.
          br
          br
          | sail-o-bots is based on the original generative project Strange Robots by Che-Yu Wu (https://twitter.com/Majer666666) Source code derived from https://openprocessing.org/sketch/1150492 under CC-BY-SA 3.0 license. Modifications include: custom botGlasses variable added with 3 different cases; custom botLips variable added with 3 different cases; 10 sets of custom colors added; antennas, ear and nose size and geometric shape types updated.

</template>
<style lang="sass">
.page.news
  .news-info  
    margin-left: -100px
    margin-top: 50px

        
    .news-title .line
      background-color: black
      color: white
      line-height: 1.3
      padding: 0px 30px
      
    .news-date
      padding: 0px 30px
      background-color: white
      color: black
      width: fit-content


    @media only screen and (max-width: 768px)
      margin-left: 0
      margin-top: -50px
      .news-title .line
        padding: 0
      

</style>