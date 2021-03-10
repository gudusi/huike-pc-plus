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
import YoCoreMenu from "./core-menu-component/core-menu-component.vue";
import { ioc } from "@voyo/core";
import { SettingService } from "@/voyo-gateway/setting.service";
const settingService: SettingService = ioc.getService("yo-setting");

@Options({
  components: {
    YoCoreContent,
    YoCoreNav,
    YoCoreNavUser,
    YoCoreMenu
  }
})
export default class extends Vue {
  mobileNavShow = false;
  menuStatus = false;
  created() {
    settingService
      .watchNavMenuChangeImmediate()
      .subscribe(v => (this.menuStatus = v));
  }
}
</script>
<style src="./core-page.scss" lang="scss"></style>
