<template>
  <section id="contributors" v-scroll-reveal.reset class="contributors">
    <div class="max-width">
      <h2 class="title">Staff</h2>
    </div>

    <div class="carousel">
      <div class="cardd">
        <div class="boxx">
          <img
            class="banneer"
            src="https://cdn.discordapp.com/banners/431072028838330368/a_9f0aa43df571953a00250312ddadeca0.gif?size=1024"
            alt
          />
          <img
            class="pfp"
            src="https://cdn.discordapp.com/avatars/431072028838330368/3345e2d7627f380028adb12e29424196.png?size=512"
            alt
          />
          <div class="text">0xdefnoterr</div>
          <p>
            <button class="badges owner">Owner</button>
            <button class="badges developer">Developer</button>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Contributors',
}
</script>
