<template lang='pug'>
div: h1 {{msg}}
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  created() {
    console.log("msg", this.msg);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
