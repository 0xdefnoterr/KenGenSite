import VueScrollReveal from 'vue-scroll-reveal'
import Vue from 'vue'
// OR specifying custom default options for all uses of the directive
Vue.use(VueScrollReveal, {
  class: 'v-scroll-reveal',
  easing: 'cubic-bezier(0.5, 0, 0, 1)',
  origin: 'bottom',
  duration: 800,
  scale: 1,
  distance: '50px',
  mobile: false,
})
