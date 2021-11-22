<template lang="pug">
.page.news
  .container
    .row 
      .col-12
        h1.animated.fadeInUp 
          span News
          br
          .strokeText HAMILY UPDATE

    .row 
      a(href="https://foundation.app/@thehamily/~/110346" target="_blank").col-sm-5
        video.w-100(loop muted autoplay src="https://d2ybmb80bbm9ts.cloudfront.net/19/Du/QmcyAMkd1YiEXJKaryma6NSgGZXqzkoghzTLVGNyRk19Du/nft_preview_q3.mp4")
      a(href="https://foundation.app/@thehamily/~/110346" target="_blank").col-sm-7
        .news-info
          h3.date.news-date 2021/11/21
          h2.news-title 
            span.line THE ATOM OF HAM
            br
            span.line START AUCTION
          .link-readmore
            span
              SvgInline(src="/more_arrow.svg", style="width: 200px;display: inline-block;")
            span.ml-3.text-read-more Go To the Auction 

      .col-12.mt-5
        p In honor of the launch of the Hamily website, sensei Che-Yu has created one premium craft ham, titled “The Atom of Ham” which is set to auction off the week of November 22, 2021.
        p The Hydrogen Ham is a unique 1/1 NFT that pays homage to the role of seahams as the original project of the hamiverse.
        p The holder of the premium ham will gain access to the Hamily DAO and proceeds from the auction will go into the Hamily treasury, with the goal of better supporting and growing the loyal community.
      .hr
    .row 
      .col-sm-5
        img.w-100(src="/the_hamily_news_cover.jpeg")
      .col-sm-7
        .news-info
          h3.date.news-date 2021/11/22
          h2.news-title 
            span.line THE HAMILY
            br
            span.line WEBSITE REVEAL
      .col-12.mt-5
        //- p We finally have our website for THE HAIMLY
      //-   p Sail-o-bots try to combine but also spare concepts, perceptions and even basic human need based on Maslow's hierarchy. They are the mischief of the sea, have their own tiny boats to sail but they prefer to stand still, and watch the sunset. Until the next day comes, Sail-o-bots wait, they do not eat, they do not sleep, that's why they are on edge from time to time. Do not judge them quickly. Each bot has its own messages if you want to take or they are just shiny stuff you can stare at. Sail-o-bots cannot stay at a same style, that is who they are, they might be called inconsistent, but it has advantages, having multiple disciplines is really important for them, they will never stop trying to discover more. They will always be going back and forward around several versions, do not think that they will stop at one since they discover themselves, which is probably never.
      //-     br
      //-     br
      //-     | sail-o-bots is based on the original generative project Strange Robots by Che-Yu Wu (https://twitter.com/Majer666666) Source code derived from https://openprocessing.org/sketch/1150492 under CC-BY-SA 3.0 license. Modifications include: custom botGlasses variable added with 3 different cases; custom botLips variable added with 3 different cases; 10 sets of custom colors added; antennas, ear and nose size and geometric shape types updated.
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
      
  .hr
    position: relative
    display: block
    margin-top: 50px
    margin-bottom: 50px
    // border: none
    border-top: solid 2px white
    width: 100%
</style>