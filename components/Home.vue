<template>
  <section id="home" v-scroll-reveal.reset class="home">
    <div class="max-width">
      <div class="home-content">
        <div class="text-1">Hi, my name is</div>

        <div class="text-2">KenGen</div>

        <vue-typed-js
          :strings="[
            'awesome',
            'brilliant',
            'hot',
            'simple',
            'nice',
            'breathtaking',
            'cute',
            'dazzling',
            'gorgerous',
          ]"
          :loop="true"
          :back-speed="80"
          :type-speed="120"
          :smart-backspace="true"
        >
          <div class="text-3">and I am <span class="typing" />.</div>
        </vue-typed-js>

        <a class="painful" href="/invite">Invite Me</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Home',
}
</script>
