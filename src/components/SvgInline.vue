<template lang="pug">
.svg_inline(v-html='svg_html', :is='svg ? "div" : "img"', :src='src')
</template>


<script>
import axios from 'axios';
// import { TweenMax } from "gsap";
// import $ from "jquery";
export default {
  props: {
    src: {
      type: String,
      default: ''
    },
    position: {
      type: Object,
      default:  () =>{
        return { x: 50, y: 50 };
      }
    },
    disablePosition: {
      type: Boolean,
      default: false
    },
    svg: {
      type: Boolean,
      default: true
    },
    displayExclamation: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      svg_html: ''
    };
  },
  computed: {
    // preload_svg_data() {
    //   if (this.$store.state.svgData[this.src]) {
    //     return this.$store.state.svgData[this.src];
    //   } else {
    //     this.$store.dispatch("loadSvgData", this.src);
    //   }
    //   return null;
    // },
    // // proceed(){
    // // return this.svg_html.replace(/\<(trigger.*?)\>/g,"$1")
    // // }
    svgStyle() {
      let style = {};
      style = {};
      if (!this.disablePosition) {
        style.transform = `scale(${this.scale}) translate(${
          this.position.x + '%'
        },${this.position.y + '%'})`;
        style['transform-origin'] = '50% 50%';
      }
      return style;
    }
  },
  created() {
    // setTimeout(() => {
    //   if (!this.$store.state.svgData[this.src]) {
    //     this.$store.dispatch("loadSvgData", this.src);
    //   }
    // }, 300);
    axios.get(this.src).then(r => {
      // console.log("------");
      // console.log(r.data);
      let injectedSvg = r.data;
      injectedSvg = r.data;
      //   let id = this.src.includes("scenes")
      //     ? this.src.split("/")[2].split(".")[0]
      //     : this.src.split("/")[1].split(".")[0];
      //   // console.log("id")
      //   // console.log(id);
      //   injectedSvg = r.data
      //     .replace("<svg ", `<svg idinjected id="svg_${id}"`)
      //     .replace(
      //       /data-name="mark".*?d="M(.*?),(.*?)a/g,
      //       `markreplace" ></path><g transform="translate($1 $2) "><defs><style>.ad56ba03-60bc-4bf3-ac4b-91af124b03e7{isolation:isolate;}.aa668e81-b1b2-41c9-af5d-4d35c7c0ad47{opacity:0.7;mix-blend-mode:multiply;}.a8dcad5a-68e8-4ed7-8f39-6c9e0031d072{fill:#fff;}.f144a559-f832-4fb0-af6d-74e03bb7bde9{fill:#1a1a1a;}</style></defs><g transform=" translate(-30 -30)" class="ad56ba03-60bc-4bf3-ac4b-91af124b03e7"><g id="f4a8d7af-46a0-486b-a692-3027805336ba" data-name="圖層 1"><g id="a0c2b92d-4083-4b07-90be-71247c249d08" data-name="cloud_sign"><g id="e40f62b1-4738-45aa-9197-62bca2832dd5" data-name="cloud"><image class="aa668e81-b1b2-41c9-af5d-4d35c7c0ad47" width="85" height="74" transform="translate(-1 2)" xlink:href="data:image/png;base64,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"/><path class="a8dcad5a-68e8-4ed7-8f39-6c9e0031d072" d="M54,18.17a5,5,0,0,1-2.2-1.12C47.53,12.36,42,10.78,35.9,10.43a18.08,18.08,0,0,0-4.41.34c-5.88,1-11.08,3.23-14.07,8.87a3,3,0,0,1-1.68,1.19A14.3,14.3,0,0,0,8.15,38.39a14.57,14.57,0,0,0,16.68,9.49c1.56-.32,3.41-2,4.42-1.05s.49,3.15.65,4.81c.08.86.27,1.68,1.2,2,1.09.38,1.66-.38,2.21-1.1,1.62-2.07,3.26-4.12,4.82-6.24a2.74,2.74,0,0,1,2.55-1.26,8.6,8.6,0,0,0,7.88-4.3A3.44,3.44,0,0,1,51.27,39c4.41-.81,7.93-3,9.7-7.26C63.18,26.42,60.08,20.52,54,18.17Z"/></g><g id="b4864f4c-fc89-4ea9-9820-dd06d5f4c4df" data-name="dot"><circle class="f144a559-f832-4fb0-af6d-74e03bb7bde9" cx="20.98" cy="30.71" r="3.5"/></g><g id="a39b4cd1-acc7-4f06-8e86-7ac6d7d9258b" data-name="dot"><circle class="f144a559-f832-4fb0-af6d-74e03bb7bde9" cx="34.44" cy="29.87" r="3.5"/></g><g id="b8affa85-4ba6-4191-ac37-1fea59997537" data-name="dot"><circle class="f144a559-f832-4fb0-af6d-74e03bb7bde9" cx="47.9" cy="29.04" r="3.5"/></g></g></g></g></g><path data-name="`
      //     );
      this.svg_html = injectedSvg;
      setTimeout(()=>{
        let svgEl = this.$el.querySelector("svg")
        svgEl.setAttribute("width","100%")
        svgEl.setAttribute("height","100%")
        // let ww = svgEl.offsetWidth
        // console.log(svgEl,ww)
        
      },100)
      //   this.$store.commit("setSvgData", {
      //     src: this.src,
      //     data: injectedSvg
      //   });
      // })
      // .then(() => {
      //   if (!this.displayExclamation) {
      //     TweenMax.set(".hideExclamation [data-name='!']", {
      //       css: { display: "none" }
      //     });
      //   }
      this.$emit('updateSvg');
    });
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="sass" scoped>
.svg_inline
  svg
    width: 100%
  // position: absolute
  // z-index: -1
    transform-origin: center center
// .hideExclamation
//   opacity: 0.7
//   [data-name='!']
//     display: none
[data-name='!']
    cursor: pointer
.move
    animation: move 2s infinite linear
@keyframes move
    0%
        transform: translate3d(0, 0px, 0)
    50%
        transform: translate3d(0, 25px, 0)
    100%
        transform: translate3d(0, 0px, 0)

</style>