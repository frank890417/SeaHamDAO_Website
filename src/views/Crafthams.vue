<template lang="pug">
.page
    .container
        .row 
            .col-12
            
            //- a(href="https://twitter.com/robotlovecoffee" target="_blank") Page originally contributed by @robotlovecoffee
            br
            br
                //- br
                //- .strokeText BEST HAM & POCHI<br>MEMES
    .container.pb-5
        .row
            .col-sm-6.order-1.order-sm-5
                h1.animated.fadeInUp 
                    span Crafthams
                h2.strokeText "WANT SOME HAMS?"
                br
                a.btn.btn-primary.mt-4.mb-4(href="https://opensea.io/collection/crafthams",
                            target="_blank") View Collection
            .col-sm-6.order-2.order-sm-1
                img.w-100(src="/img/crafthams/_.avif" alt="ham")

    //- .album.py-5.bg-dark
    .container-fluid
        div(v-masonry="containerId" transition-duration="0.5s" item-selector=".item")
            a.item(v-masonry-tile).col-lg-4.p-0(v-for="meme in memedata"
                :href="meme.opensea_url" target="_blank" rel="noopener noreferrer"
                :key="meme.id"
                )
                Tilt.card
                    img(:src='meme.src' alt='')
                    .card-body
                        p.card-text.fs-6
                        | {{meme.title}}
                        small
                            a.ml-3( target='_blank' :href='meme.opensea_url')
                                | {{meme.author}} 
                                img(src="/img/opensea-icon.png" width="35" )
                            a.download(:href='meme.src' download='')
                                i.fas.fa-arrow-down
                
</template>


<script>
// https://opensea.io/collection/crafthams?search[sortAscending]=false&search[sortBy]=CREATED_DATE
// let result = Array.from(document.querySelectorAll(".dVNeWL.hGwMMY")).map(a=>{
//     var myRe = /(\/assets.*?)\".*?#(.*?)\</gm;
// var myArray = myRe.exec( a.innerHTML);
//    return {
//        "opensea_url": "https://opensea.io"+ myArray?.[1],
//        "id":  myArray?.[2],
//    }
// })
//result.sort((a,b)=>a.id-b.id)
//JSON.stringify(result)

import crafthamdata from "@/assets/crafthamdata.json";
export default {
  data: () => ({
    memedata: crafthamdata.map(a => ({
      ...a,
      title: `Craftham #${a.id}`,
      src: `/img/crafthams/${a.id}.avif`
    }))
  }),
  mounted() {}
};
</script>

<style lang="sass">
.card
    background-color: transparent
    padding: 10px
.card-body
    background-color: rgba(255,255,255,0.2)
    // filter: blur(10px)
    // backdrop-filter: blur(10px)
    color: white
    font-size: 1rem
    p
        font-weight: 700
    a
        font-weight: 300
    *
        color: white
    .download
        width: 35px
        height: 35px
        display: flex
        justify-content: center
        align-items: center
        float: right
        border: solid 1px
        border-radius: 50%
        transition: 0.1s
        &:hover
            transform: scale(1.5)
            // background-color: #fff
            background-color: black
            filter: invert(100%)
</style>