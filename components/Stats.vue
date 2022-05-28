<template>
  <section id="stats" v-scroll-reveal.reset class="stats">
    <div class="max-width">
      <h2 class="title">My Stats</h2>

      <div class="stats-content">
        <div class="card">
          <div class="box">
            <i class="fas fa-server" />
            <div class="text">Servers</div>

            <p id="server-count">{{serverCount}}</p>
          </div>
        </div>

        <div class="card">
          <div class="box">
            <i class="fas fa-user" />

            <div class="text">Users</div>

            <p id="user-count">{{userCount}}</p>
          </div>
        </div>

        <div class="card">
          <div class="box">
            <i class="fas fa-terminal" />

            <div class="text">Commands</div>

            <p id="command-count">{{commandCount}}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Stats',
  data() {
    return {
      serverCount: 0,
      userCount: 0,
      commandCount: 0,
    }
  },
  mounted() {
    this.getStats()
  },
  methods: {
    async getStats() {
      await fetch('https://api.statcord.com/v3/968955497824792686')
        .then(response => response.json())
        .then(data => {
          let strData = data.data[0] 
          this.serverCount = strData.servers
          this.userCount = strData.users
          this.commandCount = strData.commands
        })
    }
  }
}
</script>
