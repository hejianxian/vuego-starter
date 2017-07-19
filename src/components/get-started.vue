<template>
  <v-page>
    <v-content>
      <v-block-title># 安装</v-block-title>
      <v-content-block>
        <span>使用 npm 或者 yarn</span>
        <ul class="code-preview">
          <li>npm install vuego --save</li>
        </ul>
      </v-content-block>
      <v-block-title># 使用</v-block-title>
      <v-content-block>
        <ul class="code-preview">
          <li>import Vue from 'vue';</li>
          <li>import Vuego from 'vuego';</li>
          <li>import 'vuego/dist/vuego.css'; // import css file</li>
          <li></li>
          <li>Vue.use(Vuego);</li>
        </ul>
      </v-content-block>
    </v-content>
  </v-page>
</template>

<script>
export default {
  name: 'getStarted',
  data() {
    return {};
  }
}
</script>

<style scoped>
.code-preview {
  background: #fff;
  border: 1px dotted #eee;
  padding: 10px;
}

.code-preview li {
  list-style: none;
  line-height: 24px;
  min-height: 24px;
}
</style>
