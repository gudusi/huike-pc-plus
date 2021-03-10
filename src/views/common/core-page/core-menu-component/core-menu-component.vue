<!--
    auto created by @ztwx vue3 template!!
    @pageAuthor  :  'zhan'
    @AuthorEmail :  zhantewei@gmail.com
    @pageCreated :  2021-3-10 13:16:50
-->

<template>
  <div class="yo-core-menu">
    <div class="_menu-bar">
      <div @click="trigger" class="_menu-bar-btn iflex-center" v-yo-ripple>
        <i
          v-if="!menuStatus"
          class="za za-menu voyo-icon-title voyo-color-des"
        ></i>
        <i v-else class="za za-close voyo-icon-title voyo-color-des"></i>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { ioc } from "@voyo/core";
import { SettingService } from "@/voyo-gateway/setting.service";
import { Subscription } from "rxjs";
const settingService: SettingService = ioc.getService("yo-setting");

@Options({
  emits: ["trigger"]
})
export default class extends Vue {
  menuStatus = false;
  trigger() {
    settingService.navMenuTrigger();
  }
  order: Subscription;
  created() {
    this.order = settingService
      .watchNavMenuChangeImmediate()
      .subscribe(v => (this.menuStatus = v));
  }
  unmounted() {
    this.order.unsubscribe();
  }
}
</script>
<style scoped src="./core-menu-component.scss" lang="scss"></style>
