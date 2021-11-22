<template lang="pug">
.page.artist.text-left
  .container 
    .row
      .col-12
        h1.animated.fadeInUp 
          span Artist
          br
          .strokeText Che-Yu Wu 
    .row
      .col-lg-5
        img.w-100.img-artist(src="https://i.imgur.com/fYCLCmn.jpg")

      .col-lg-7.mt-3
        p Che-Yu Wu is a multidisciplinary new media artist, designer, engineer, and entrepreneur from Taiwan, currently based in New York. With the sensitivity of art and engineering background. He creates generative arts which sampled from nature, physics, modernism art and turn them into algorithmic interactive art machines.
        a.weblink(href="https://cheyuwu.com/" target="_blank") 
          span
            SvgInline(src="/more_arrow.svg", style="width: 200px;display: inline-block;") 
          span &nbsp;&nbsp;Artist Website 
        h4.mt-5 Current Works:
        ul
          li 
            a(href="https://opensea.io/assets/art-blocks-factory?search[query]=Sail-o-bot&search[sortAscending]=true&search[sortBy]=PRICE",
              target="_blank") Original creator of Seahams on ArtBlocks, 750 items 
          li
            a(href="https://opensea.io/collection/cryptopochi",
              target="_blank") Creator of CryptoPochi, 732 items 
          li
            a(href="https://opensea.io/collection/cheyuwuxnobody",
              target="_blank") Project Che-Yu Wu X Nobody, 1092 items 
          li
            a(href="https://foundation.app/@cheyuwu",
              target="_blank") Algorithm Arts on Foundation, 15 items 
          li
            a(href="https://opensea.io/collection/che-yu-wu-generative-art",
              target="_blank") Generative Art NFT License on Opensea, 21 items 
          li
            a(href="",
              target="_blank") Electriz - Upcoming Artblocks Project 
          li
            a(href="",
              target="_blank") Upcoming ...🍔 ?


        .social-links
          a(href="https://twitter.com/cheyuwu345" target="_blank" title="Twitter") 
            i.fab.fa-twitter
          a(href="https://www.instagram.com/bosscodingplease/" target="_blank" title="Instagram") 
            i.fab.fa-instagram
          a(href="https://codepen.io/frank890417" target="_blank" title="Codepen") 
            i.fab.fa-codepen
          a(href="https://github.com/frank890417" target="_blank" title="Github") 
            i.fab.fa-github
          a(href="https://www.linkedin.com/in/cheyuwu/?locale=en_US" target="_blank" title="Linkedin") 
            i.fab.fa-linkedin-in
          //- a(href="https://medium.com/@wucheyu" target="_blank" title="Medium") 
          //-   i.fab.fa-medium
          //- a(href="http://issuu.com/wucheyu/docs/2017_portfolio" target="_blank" title="Portfolio on ISSUU") 
          //-   i.fas.fa-book
          a(href="mailto:cyw345@nyu.edu" target="_blank" title="Envelope") 
            i.far.fa-envelope
            
</template>

<style lang="sass">
.artist
  .social-links
    font-size: 3rem
    a
      margin-left: 1rem
  .weblink
    // background-color: white
    color: white
    padding: 5px 20px
    font-size: 1.3rem
</style>