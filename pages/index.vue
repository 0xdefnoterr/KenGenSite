<template>
  <div id="xx">
    <Header />
    <div class="scroll-up-btn">
      <i class="fas fa-angle-up" />
    </div>
    <Home />
    <Particles
      id="tsparticles"
      :particles-init="particlesInit"
      :options="particlesOptions"
    />
    <Features />
    <Stats />
    <Contributors />
    <div class="loader-wrapper">
      <img
        src="@/static/assets/dancinganime-anime.gif"
        alt="Miam"
        class="UwU"
      />

      <div class="longfazers">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
</template>

<script>
import { loadFull } from 'tsparticles'
import $ from 'jquery'

export default {
  name: 'IndexPage',
  data: () => {
    return {
      particlesInit: async (engine) => {
        await loadFull(engine)
      },
      particlesOptions: {
        particles: {
          number: {
            value: 60,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: '#ffffff',
          },
          shape: {
            type: 'circle',
            stroke: {
              width: 0,
              color: 'random',
            },
            polygon: {
              nb_sides: 1,
            },
            image: {
              src: 'img/github.svg',
              width: 0,
              height: 0,
            },
          },
          opacity: {
            value: 0.5,
            random: false,
            anim: {
              enable: false,
              speed: 2,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 2.5,
            random: true,
            anim: {
              enable: false,
              speed: 7,
              size_min: 0.1,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 120,
            color: '#ffffff',
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 4,
            direction: 'bottom',
            random: false,
            straight: false,
            out_mode: 'out',
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          detect_on: 'window',
          events: {
            onhover: {
              enable: true,
              mode: 'repulse',
            },
            onclick: {
              enable: false,
              mode: 'push',
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3,
            },
            repulse: {
              distance: 150,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
        config_demo: {
          hide_card: false,
          background_color: '#b61924',
          background_image: '',
          background_position: '50% 50%',
          background_repeat: 'no-repeat',
          background_size: 'cover',
        },
      },
    }
  },
  mounted() {
    $(window).on('load', function () {
      $('.loader-wrapper').fadeOut('slow')
    })
    $(window).scroll(function () {
      if (this.scrollY > 20) {
        $('.navbarr').addClass('sticky')
      } else {
        $('.navbarr').removeClass('sticky')
      }
      if (this.scrollY > 500) {
        $('.scroll-up-btn').addClass('show')
      } else {
        $('.scroll-up-btn').removeClass('show')
      }
    })
    $('.scroll-up-btn').click(function () {
      $('html').animate({ scrollTop: 0 }, 600)
    })
  },
}
</script>

<style scoped>
.UwU {
  width: 100%;
  max-width: 250px;
  filter: blur(2px);
}

#xx {
  background: #121212;
}
#tsparticles {
  position: absolute;
  width: 60vw;
  height: 55vh;
}
</style>
