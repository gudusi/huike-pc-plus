<!--
    auto created by @ztwx vue3 template!!

    @pageAuthor  :  'zhan'
    @AuthorEmail :  zhantewei@gmail.com
    @pageCreated :  2021-3-1 10:13:14
-->

<template src="./test-one-page.html"> </template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
@Options({})
export default class extends Vue {
  arr: any[] = new Array(6).fill(1);
  name = 1;
  age = "";
}
</script>
<style scoped src="./test-one-page.scss" lang="scss"></style>
