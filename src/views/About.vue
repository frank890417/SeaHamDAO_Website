<template lang="pug">
.page.about.text-left
  .container
    .row
      .col-md-7
        h1.animated.fadeInUp 
          span About
          br
          span.strokeText WHY HAMS
        p Sail-o-bots try to combine but also spare concepts, perceptions and even basic human need based on Maslow's hierarchy. They are the mischief of the sea, have their own tiny boats to sail but they prefer to stand still, and watch the sunset. Until the next day comes, Sail-o-bots wait, they do not eat, they do not sleep, that's why they are on edge from time to time. Do not judge them quickly. Each bot has its own messages if you want to take or they are just shiny stuff you can stare at. Sail-o-bots cannot stay at a same style, that is who they are, they might be called inconsistent, but it has advantages, having multiple disciplines is really important for them, they will never stop trying to discover more. They will always be going back and forward around several versions, do not think that they will stop at one since they discover themselves, which is probably never.<br>
          br
          | sail-o-bots is based on the original generative project Strange Robots by Che-Yu Wu (https://twitter.com/Majer666666) Source code derived from https://openprocessing.org/sketch/1150492 under CC-BY-SA 3.0 license. Modifications include: custom botGlasses variable added with 3 different cases; custom botLips variable added with 3 different cases; 10 sets of custom colors added; antennas, ear and nose size and geometric shape types updated.
      .col-md-5.pt-5
        iframe( width="100%" height="400px" src="https://generator.artblocks.io/98000005")
        img.bg-strokeham(src="/about_strokeham.svg")
    .row
      .col-12.text-left
        a.link-why(href="https://blog.floors.cafe/why-hams/" target="_blank") 
          h2 BONE’s
          h1.why-hams WHY HAMS



    .row.mt-5
      .col-12
        //- img.w-100(src="/hamiverse_deco_2.svg")
        //- h2 The Manifesto
        //- h3 (Mission Statement, Concept, Points System)
        //- br
        //- h4 The SeaHamDAO Manifesto
        //- p Introducing the SeaHamDAO - a community of artists, art collectors and art enthusiasts bringing together the best people in the NFT world.
        //- p SeaHamDAO will amass a collection of assets that are highly scarce, then create content that reinforces their social significance and strengthens desires for these assets. Drawing inspiration from NounsDAO, all holders of assets have voting power.The treasury is controlled exclusively via governance by holders.
    

    //- .row.mt-5
    //-   .col-md-4
    //-     h3 WHY?
    //-     p A place for Ham holders to exchange knowledge and discuss collections and individual pieces from the NFT art world. Lets unite, align and grow together. 
    //-       br
    //-       | Also why: We need to unite the pochis and all hams under one token for a true DAO (*as many of you know the hams are unable to access the private discord channels as of yet).

    //-   .col-md-4
    //-     h3 HOW?
    //-     p  Sensei Che has invited the Hamily to Foundation and given the community three timeless Hams to auction off to kick start the DAO. The proceeds will seed the treasury, which will be governed by all members of the community going forward. Community votes will be tiered with a point system where Craft Holders will have 10votes/craft, Hams 5 votes, pochi 2 and Nobodies also 2. TBC
    //-   .col-md-4
    //-     h3 MISSION?
    //-     p The main mission is to grow the Treasury by acquire more ETH, more SEAHAMs and more rare NFTs, to finance che yu wu as an artist and allocate budget for new collabs or developers to build out infrastructure. Simultaneously the goal is to grow the community & governance participation, through collabs with other artists, marketing campaigns and partnerships with other DAOS and collectors.
  .container-fluid
    img.w-100(src="/hamiverse_deco_4.svg")
  //- .container
    //- .row.mt-5
    //-   h3 The DAO has 4 overarching missions:
    //-   ol
    //-     li Become an artist incubator for artists to collab with sensei che, and onboard new artists to web3, helping them establish a footing in the scene. First by airdopping their works to the ham dao members (key collectors in the ecosystem), while also opening minting up to the public.
    //-     li Acquire more Hams and Pochis for the DAO Treasury (buying floor hams and pochis for the daos collection vault). Eventually, many Craft Ham and Pochi should be held by the DAO and governed by the DAO members.
    //-     li Collect rare NFTs from the most important NFT artists and collections to vault. 
    //-     li Become an NFT art ecosystem fund (incentivise long holding).
    //- .row.mt-5
    //-   .col-md-6
    //-     h3 GROW?
    //-     h4 How else to enter the DAO?
    //-     ol
    //-       li Buy access to the DAO with memes? Proceeds from NFT sales will go to the DAO treasury. 
    //-       li Active participation, rewarded memes?
    //-       li New collections, collabs.
    //-   .col-md-6
    //-     h3 NEXT
    //-     h4 is the long term vision for a ‘metaverse native community’
    //-     p Emergence into the real world! With swag, live events and meetings, sponsorships, and royalty deals (adult swim style cartoon) for Netflix. Some vague ideas here which should be democratically developed through the dao.
    //-     p The goal of the dao is to coordinate to grow the treasury through acquisitions, which will then allow for growth and an emergence into the real world. A crowdsourced fund to help emerging artists and an incubator for ‘art on chain’.

    .row.mt-5
      .col-12
        h3 THOUGHTS?
        p New channels on discord where everyone can participate, streamlining the DAOs governance processes (proposals, appeals, gov, etc) and also setting up a notion, discourse and snapshot space which will become the heart of the gov operations.

    .row.mt-5
      .col-12
        h3 HELP!
        p We need contributors! Community managers, artists, developers, team leaders, and much much more! Reach out to us in discord once we have set up the new job/onboarding channels! 


</template>
<script>
export default {
  metaInfo() {
    return {
      title: 'My Example App',
      titleTemplate: 'Hello',
      htmlAttrs: {
        lang: 'en',
        amp: true
      }

    }
  },
}
</script>


<style lang="sass">
.about
  .why-hams
    font-size: 16vw
    white-space: nowrap
    margin-left: -5vw
    font-weight: 900s
   
  .bg-strokeham
    width: 110%
    position: absolute
    bottom: -20vh
    left: 0
  .link-why
    color: white
  .img-artist
    // filter: saturate(0%) 
</style>