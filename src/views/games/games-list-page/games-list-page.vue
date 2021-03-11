<!--
    auto created by @ztwx vue3 template!!

    @pageAuthor  :  lou
    @AuthorEmail :  lousicong@egridcloud.com
    @pageCreated :  2021-3-10 13:51:50
-->

<template src="./games-list-page.html"> </template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
@Options({})
export default class extends Vue {
  currentPage4 = 4;
  handleSizeChange(val: any) {
    console.log(`每页 ${val} 条`);
  }
  handleCurrentChange(val: any) {
    console.log(`当前页: ${val}`);
  }
}
</script>
<style scoped src="./games-list-page.scss" lang="scss"></style>
