<template lang="pug">
.page.news
  .container
    .row 
      |
      .col-12
        h1.animated.fadeInUp 
          |
          span News
          br
          .strokeText HAMILY UPDATE
    // news template 
    .row(v-for="newsItem in newsItems")
      a.col-sm-5(:href="newsItem.link", target="_blank")
        img.w-100(:src="newsItem.imgSrc")
      a.col-sm-7(:href="newsItem.link", target="_blank")
        .news-info
          h3.date.news-date {{ newsItem.date }}
          h2.news-title
            span.line {{ newsItem.title }}
            br
            span.line {{ newsItem.workTitle }} by
              a(:href="newsItem.authorLink", target="_blank") {{ newsItem.authorName }}

          .countdown
            .number {{ newsItem.displayTime }}
          .link-readmore
            span
              SvgInline(
                src="/more_arrow.svg",
                style="width: 200px; display: inline-block"
              )
            span.ml-3.text-read-more {{ newsItem.readMore }}

        .col-12.mt-5
          p {{ newsItem.description }}
          //- span(v-for="bullet in newsItem.bullets")
          //-   br
          //-   | {{ bullet }}

      .hr


    // old news
    .row 
      |
      a.col-sm-5(
        href="https://foundation.app/@thehamily/~/116676",
        target="_blank"
      )
        video.w-100(
          loop,
          muted,
          autoplay,
          src="https://d2ybmb80bbm9ts.cloudfront.net/mQ/EN/QmfJAfaKpeL1rgUsG5teqgN9EZQkj6NXTyfAkpKdjGmQEN/nft_q4.mp4"
        )
      a.col-sm-7(
        href="https://foundation.app/@thehamily/~/121953",
        target="_blank"
      )
        .news-info
          h3.date.news-date 2021/12/21
          h2.news-title 
            |
            span.line THE ATOM OF HAM - #S
            br
            //- span.line ENDS AT 5.69ETH
            //- span.line @sunday_
            span.line Started Auction!

          .countdown
            .number {{ displayTime }}
            //- .bid Current Bid 5ETH
          .link-readmore
            span
              SvgInline(
                src="/more_arrow.svg",
                style="width: 200px; display: inline-block"
              )
            span.ml-3.text-read-more Go To the Auction

      .col-12.mt-5
        p Created by sensei Che-Yu, the Sulfur Ham is a 1/1 premium craft ham. This sulfuric ham is comprised of cosmically abundant, but essential elements for life in the Hamily.
        p Seaham is a meme and a glitch in the world of digital art.
          br
          | They are transformed into rhythms that dominate life.
          br
          | Their spirit is deconstructed into pixels and spread to the world.
          br 
          | Continue to float in the digital sea and start countless journeys with immortality.
        p The Sulfur ham will be the third craft ham to be auctioned on behalf of The Hamily.
        p The holder of the premium ham will gain access to the Hamily DAO and proceeds from the auction will go into the Hamily treasury, with the goal of better supporting and growing the loyal community.

      .hr

    .row 
      |
      a.col-sm-5(
        href="https://foundation.app/@thehamily/~/116676",
        target="_blank"
      )
        video.w-100(
          loop,
          muted,
          autoplay,
          src="https://d2ybmb80bbm9ts.cloudfront.net/md/do/QmWaXrUmFQCzyHcRZeJ9YjVdw39boTF8DE2L2NPzLQmddo/nft_q4.mp4"
        )
      a.col-sm-7(
        href="https://foundation.app/@thehamily/~/116676",
        target="_blank"
      )
        .news-info
          h3.date.news-date 2021/12/11
          h2.news-title 
            |
            span.line THE ATOM OF HAM - #AM
            br
            span.line ENDS AT 5.69ETH
            span.line @sunday_

          //.countdown
            .number {{ displayTime }}
            //- .bid Current Bid 5ETH
          .link-readmore
            span
              SvgInline(
                src="/more_arrow.svg",
                style="width: 200px; display: inline-block"
              )
            span.ml-3.text-read-more Go To the Auction

      .col-12.mt-5
        p Created by sensei Che-Yu, the Americium Ham is a 1/1 premium craft ham. These melting, warped hams are inspired by americium, a synthetic radioactive chemical element.
        p The Americium ham will be the second craft ham to be auctioned on behalf of The Hamily.
        p The holder of the premium ham will gain access to the Hamily DAO and proceeds from the auction will go into the Hamily treasury, with the goal of better supporting and growing the loyal community.
      .hr
    .row 
      |
      a.col-sm-5(
        href="https://foundation.app/@thehamily/~/110346",
        target="_blank"
      )
        video.w-100(
          loop,
          muted,
          autoplay,
          src="https://d2ybmb80bbm9ts.cloudfront.net/19/Du/QmcyAMkd1YiEXJKaryma6NSgGZXqzkoghzTLVGNyRk19Du/nft_preview_q3.mp4"
        )
      a.col-sm-7(
        href="https://foundation.app/@thehamily/~/110346",
        target="_blank"
      )
        .news-info
          h3.date.news-date 2021/11/21
          h2.news-title 
            |
            span.line THE ATOM OF HAM
            br
            span.line ENDS AT 10.69ETH
            span.line @thevelvetrut

          //.countdown
            .number {{ displayTime }}
            //- .bid Current Bid 5ETH
          .link-readmore
            span
              SvgInline(
                src="/more_arrow.svg",
                style="width: 200px; display: inline-block"
              )
            span.ml-3.text-read-more Go To the Auction

      .col-12.mt-5
        p In honor of the launch of the Hamily website, sensei Che-Yu has created one premium craft ham, titled “The Atom of Ham” which is set to auction off the week of November 22, 2021.
        p The Hydrogen Ham is a unique 1/1 NFT that pays homage to the role of seahams as the original project of the hamiverse.
        p The holder of the premium ham will gain access to the Hamily DAO and proceeds from the auction will go into the Hamily treasury, with the goal of better supporting and growing the loyal community.
      .hr
    .row 
      |
      .col-sm-5
        img.w-100(src="/the_hamily_news_cover.jpeg")
      .col-sm-7
        .news-info
          h3.date.news-date 2021/11/22
          h2.news-title 
            |
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

<script>
import * as dayjs from "dayjs";
export default {
  data() {
    return {
      newsItems: [
        {
          link: "https://app.manifold.xyz/c/HamilyLimitedEditions4",
          imgSrc: "/img/meme4.jpeg",
          date: "2023/3/23",
          title: "Hamily Drops #4",
          workTitle: "THE SECRET MEETING",
          authorLink: "https://twitter.com/4LeafCloverNFT",
          authorName: "@4LeafCloverNFT",
          displayTime: "",
          readMore: "Go To Claim",
          description:
            "Now available as a Limited Edition claim, Hamily Limited Editions Claims: \nThe Secret Meeting",
        },
        {
          link: "https://app.manifold.xyz/c/HamilyLimitedEditions3",
          imgSrc: "/img/meme3.jpeg",
          date: "2023/3/9",
          title: "Hamily Drops #3",
          workTitle: "HAM JUMP",
          authorLink: "https://twitter.com/BasqKek",
          authorName: "@BasqKek",
          displayTime: "",
          readMore: "Go To Claim",
          description:
            "Now available as a Limited Edition claim, for the next 72h\nMints only for whitelisted Hamily Asset holders who participated in this drop.\nPochi & Hambody WL raffle winners in the next tweet!",
        },
        {
          link: "https://app.manifold.xyz/c/HamilyLimitedEditions2",
          imgSrc: "/img/meme2.jpeg",
          date: "2023/2/23",
          title: "Hamily Drops #2",
          workTitle: "SEIZE THE SEAHAMS",
          authorLink: "https://twitter.com/SkifeHam",
          authorName: "@Skife",
          displayTime: "",
          readMore: "Go To Claim",
          description:
            "Hamily Limited 750 Editions Claims:\nSEIZE THE SEAHAMS\nby Skife",
        },
        {
          link: "https://app.manifold.xyz/c/HamilyLimitedEditions",
          imgSrc: "/img/hamilydrop-guido.jpeg",
          date: "2023/2/9",
          title: "Hamily Drops #1",
          workTitle: "HAM FORTUNA IUVAT",
          authorLink: "https://twitter.com/GuidoDisalle",
          authorName: "@Guido",
          displayTime: "",
          readMore: "Go To Claim",
          description:
            "The claims page for whitelisted Hamily Asset holders will go live at 11AM EST, and verified addresses must claim their mints within 24 hours.\nAny unclaimed assets will be burned. Stay tuned for the Claims Page post!",
        },
      ],
      currentTime: null,
    };
  },
  mounted() {
    setInterval(() => {
      this.currentTime = new Date();
    }, 500);
  },
  computed: {
    displayTime() {
      const date1 = dayjs("2021-12-23T20:51:50Z");
      const date2 = dayjs(this.currentTime);
      // console.log(date1,date2)
      let diff = date1.diff(date2);
      if (diff < 0) diff = 0;
      return dayjs(diff).format("HH:mm:ss");
    },
  },
};
</script>

<style lang="sass">
.page.news
  .news-info
    margin-left: -100px
    margin-top: 50px
    .countdown
      margin-left: 100px
      font-size: 3rem
      font-weight: 800
      @media only screen and (max-width: 768px)
        margin-left: 0

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