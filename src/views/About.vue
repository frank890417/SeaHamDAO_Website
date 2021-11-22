<template lang="pug">
.page.about.text-left
  .container
    .row
      .col-md-7
        h1.animated.fadeInUp 
          span About
          br
          span.strokeText WHY HAMS
        p Sail-o-bots elegantly combine distinct concepts and perceptions about basic human needs through Maslow's Hierarchy of Needs. They are the mischief of the sea, each with their own tiny boats to sail on, but they prefer to stand still and watch the sunset. Until the next day comes, Sail-o-bots wait: they do not eat, they do not sleep. That is why Sail-o-bots  are on edge from time to time. Do not judge them quickly. Each bot has its own messages if you take the time to listen, or you can simply choose to stare at their faces instead.  Sail-o-bots cannot stay still, that is who they are. They might be called inconsistent, but having multiple disciplines is really important for them and has its advantages as they will never stop trying to discover more. Sail-o-bots are always going back and forward around several versions, do not think that they will stop at one version since they are constantly rediscovering themselves. 
          br
        p Sail-o-bots is based on the original generative project Strange Robots by Che-Yu Wu
          a(href="https://twitter.com/cheyuwu345" target="_blank")
          | Source code derived from https://openprocessing.org/sketch/1150492 under CC-BY-SA 3.0 license. Modifications include: custom botGlasses variable added with 3 different cases; custom botLips variable added with 3 different cases; 10 sets of custom colors added; antennas, ear and nose size and geometric shape types updated.
      .col-md-5.pt-5
        iframe( width="100%" height="400px" src="https://generator.artblocks.io/98000005")
        h2 {{$store.state.scrollY}}
        img.bg-strokeham(src="/about_strokeham.svg", :style="{transform: `rotate(${$store.state.scrollY/10}deg)`}")
    .row
      .col-12.text-left
        a.link-why(href="https://blog.floors.cafe/why-hams/" target="_blank") 
          h2 BONE’s
          h1.why-hams WHY HAMS



    .row.mt-5
      .col-12
        img.w-100(src="/hamiverse_deco_2.svg")
        h2 The Manifesto
        //- h3 (Mission Statement, Concept, Points System)
        p The Hamily is a group of artists, collectors and general enthusiasts of the prosciutto coming together to act as stewards of the ham. We seek to grow the community in size and strength, facilitate the production of derivative works, and amass a treasury that can be deployed across a variety of initiatives to build awareness for the Sea Ham.
        p Sensei Che-Yu has invited The Hamily to Foundation and supplied three timeless Hams to auction to seed the treasury, which will be governed by holders of Sea Hams, Craft Hams, Pochis, Hambodies, and future collaborative projects. 
        p The Hamily will initially employ a benevolent dictator style structure, with VVD acting as the Hambassador until governance processes are formalized over the coming months and decentralized voting is implemented. 
        p The role of the Hambassador is that of a community approved arbiter who seeks to steer the The Hamily towards their stated goals and act as a public representative for the collective. The roll of the Hambassador will be up for election numerous times per year


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
  .container
    .row.mt-5
      .col-12
        h3 HELP!
        p We need contributors! Community managers, artists, developers, team leaders, and much much more! Reach out to us in discord once we have set up the new job/onboarding channels! 
        br
        p Contact: hello@hamily.life
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