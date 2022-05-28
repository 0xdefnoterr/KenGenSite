<template>
  <main>
    <h1>Redirecting you to the invite page.</h1>
    <img src="@/static/assets/dancinganime-anime.gif" alt="Miam">
  </main>
</template>

<script>
export default {
  name: 'invitePage',
  head() {
    return {
      title: 'Redirecting you to the invite page.',
      meta: [
        { name: 'description', content: 'Redirecting you to the invite page.' },
        { 'http-equiv': 'refresh', content: '2; url=https://discord.com/oauth2/authorize?client_id=968955497824792686&scope=bot&permissions=8' },
        { property: 'og:title', content: 'Redirecting you to the invite page.'}
      ],
    }
  }
}
</script>

<style>
@import url('//fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap');

html {
  overflow: hidden;
}
main {
  background: #121212;
  text-align: center;
  justify-content: center;
  padding: 5% 0;
}
h1 {
  color: #fff;
  font-size: 75px;
  font-family: 'Ubuntu', sans-serif;
  padding-bottom: 50px;
}
img {
  width: 100%;
  max-width: 500px;
  filter: blur(2px);
}
</style>