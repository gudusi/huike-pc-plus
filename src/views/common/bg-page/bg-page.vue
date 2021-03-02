<!--
    auto created by @ztwx vue3 template!!

    @pageAuthor  :  'zhan'
    @AuthorEmail :  zhantewei@gmail.com
    @pageCreated :  2021-2-24 14:44:51
-->

<template>
  <div class="yo-bg-wrapper" :class="[center ? '__center' : '']">
    <div class="yo-bg">
      <!--      <svg viewBox="0 0 1024 1024" width="500" height="500">-->
      <!--        <rect width="400" height="400" fill="red" x="0"></rect>-->
      <!--      </svg>-->
      <img />
    </div>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Options, Vue, prop } from "vue-class-component";
class BgProps {
  center = prop<boolean>({ default: false, type: Boolean });
}
@Options({})
export default class extends Vue.with(BgProps) {
  mounted(this: any) {}
}
</script>
<style scoped src="./bg-page.scss" lang="scss"></style>
