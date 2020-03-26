<template>
  <div id="app">
    <vue-particle-line :dotsDistance="120">
      <Nav v-if="isShowNav" />
      <router-view />
    </vue-particle-line>
  </div>
</template>
<script lang="ts">
import vueParticleLine from "vue-particle-line";
import "vue-particle-line/dist/vue-particle-line.css";
import { Vue, Watch } from "vue-property-decorator";
import Component from "vue-class-component";
import { Route } from "vue-router";
import Nav from "@/components/Nav/index.vue";
Vue.use(vueParticleLine);

@Component({
  components: {
    Nav
  }
})
export default class App extends Vue {
  private isShowNav: boolean = true;
  @Watch("$route")
  routeChange(val: Route, oldVal: Route): void {
    const referrer: any = document.getElementById("referrer");
    if (val.path === "/" || val.path == "/404" || val.path == "*") {
      this.isShowNav = false;
      referrer.setAttribute("content", "always");
    } else {
      this.isShowNav = true;
      referrer.setAttribute("content", "never");
    }
  }
}
</script>
