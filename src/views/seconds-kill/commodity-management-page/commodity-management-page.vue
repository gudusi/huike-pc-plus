<!--
    auto created by @ztwx vue3 template!!

    @pageAuthor  :  yang
    @AuthorEmail :  yangss@expservice.com.cn
    @pageCreated :  2021-3-9 14:46:23
-->

<template src="./commodity-management-page.html"> </template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import AddShop from "./add-shop-component/add-shop-component.vue";

@Options({
  components: {
    AddShop
  }
})
export default class extends Vue {
  // name:"";//竞品名称
  name = "";
}
</script>
<style scoped src="./commodity-management-page.scss" lang="scss"></style>
