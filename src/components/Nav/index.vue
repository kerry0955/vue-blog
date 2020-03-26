<template>
  <div class="nav">
    <div v-if="!isMobile">
      <div class="wrap">
        <div class="itemlog">
          <router-link to="/">
            <span class="logo">
              <img src="@a/img/logo.png" alt="jsguan" style="width:100%" />
            </span>logo
          </router-link>
        </div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
@Component({})
export default class Nav extends Vue {
  private isMobile: boolean = false;
}
</script>
<style   scoped>
.nav {
  margin: 0 auto;
  width: 98%;
  height: 8%;
  border: 1px solid red;
}
.wrap {
  width: 100%;
  height: 100%;
  padding: 0.5em;
  background-color: #fff;
  overflow-y: auto;
  display: -webkit-flex; /* Safari */
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;
}
.wrap .itemlog {
  width: 10%;
  border: 1px solid red;
}
.wrap .item {
  width: 10%;
  border: 1px solid red;
  align-self: stretch;
}
.logo {
  display: inline-block;
  width: 25%;
}
</style>