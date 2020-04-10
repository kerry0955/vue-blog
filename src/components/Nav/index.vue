<template>
  <div class="nav">
    <div v-if="!isMobile">
      <div class="wrap">
        <div class="itemlog">
          <router-link to="/">
            <p class="center shou">
              <span class="logo">LOGO</span>
            </p>
          </router-link>
        </div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item itemLink">
          <p class="center shou">
            <span>首页</span>
          </p>
        </div>
        <div class="item">
          <p class="center shou">
            <span>项目</span>
          </p>
        </div>
        <div class="item">
          <p class="center shou">
            <span>文章</span>
          </p>
        </div>
        <div class="item">
          <p class="center shou">
            <span>撩我</span>
          </p>
        </div>
        <div class="item">
          <p class="center shou">
            <span>登录</span>
          </p>
        </div>
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

  /* border: 1px solid red; */
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
  background-color: rgba(242, 242, 242, 0.751);
}
.wrap .itemlog {
  width: 10%;
  /* border: 1px solid red; */
}
.wrap .item {
  width: 10%;
  /* border: 1px solid red; */
  align-self: stretch;
}
.wrap .itemLink {
  color: #4980f9;
  border-bottom: 2px solid #4980f9;
  font-weight: 600;
}
.logo {
  display: inline-block;
  width: 25%;
}
</style>