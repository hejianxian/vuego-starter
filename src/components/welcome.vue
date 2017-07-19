<template>
  <v-page>
    <v-content>
      <v-content-block id="app">
        <img src="../assets/vuego.png" width="120">
        <h3>Vuego <sub>v0.1.3</sub></h3>
        <span>{{msg}}</span>
        <ul class="props-list">
          <li>Beautiful UI</li>
          <li>Simple and lightweight</li>
          <li>Optional packages</li>
        </ul>
        <v-row>
          <v-col>
            <v-button class="primary">Github</v-button>
          </v-col>
          <v-col>
            <v-button class="danger" @click.native="goGetStartedPage">Get Started</v-button>
          </v-col>
        </v-row>
      </v-content-block>
    </v-content>
  </v-page>
</template>

<script>
export default {
  name: 'welcone',
  data () {
    return {
      msg: 'Mobile UI components with Vue.js 2.0.',
    };
  },
  methods: {
    goGetStartedPage() {
      this.$router.push('get-started');
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 50px;
}

h3 {
  font-size: 20px;
  margin-bottom: 5px;
}

sub {
  font-size: 10px;
  color: #999;
}

.props-list {
  margin: 30px 0;
  padding: 0;
}

.props-list li{
  list-style: none;
  line-height: 24px;
  color: #666;
}

</style>
