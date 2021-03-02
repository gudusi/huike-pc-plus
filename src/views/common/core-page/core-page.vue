<!--
    auto created by @ztwx vue3 template!!

    @pageAuthor  :  'zhan'
    @AuthorEmail :  zhantewei@gmail.com
    @pageCreated :  2021-3-1 10:8:50
-->

<template src="./core-page.html"> </template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import YoCoreContent from "./core-content-component/core-content-component.vue";
import YoCoreNav from "./core-nav-component/core-nav-component.vue";
import YoCoreNavUser from "./core-nav-user-component/core-nav-user-component.vue";

@Options({
  components: {
    YoCoreContent,
    YoCoreNav,
    YoCoreNavUser
  }
})
export default class extends Vue {}
</script>
<style src="./core-page.scss" lang="scss"></style>
