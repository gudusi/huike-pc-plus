<!--
    auto created by @ztwx vue3 template!!
    @pageAuthor  :  'zhan'
    @AuthorEmail :  zhantewei@gmail.com
    @pageCreated :  2021-3-1 11:10:36
-->

<template>
  <div class="yo-core-user">
    <voyoc-btn-icon ref="moreBtn" class="abs-tr" size="small" type="candy">
      <i class="za za-more2"></i>
    </voyoc-btn-icon>
    <voyoc-menu :forEl="forEl">
      <div slot="menu" class="text-center yo-core-user-menu-content">
        <div class="voyo-li">
          <img class="voyo-avatar __size-medium" :src="user.avatar" />
        </div>
        <div class="voyo-li flex-between __border" v-yo-ripple>
          <span>修改信息</span>
          <i class="za za-setting"></i>
        </div>
        <div class="voyo-li">
          <voyoc-btn block round size="small" type="candy">登出</voyoc-btn>
        </div>
      </div>
    </voyoc-menu>
    <div class="flex-center-column">
      <img class="voyo-avatar" :src="user.avatar" />
      <div class="voyo-title-line">
        <span class="_content">{{ user.username }}</span>
      </div>
      <div class="voyo-des-line">{{ user.positionName }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
@Options({
  computed: {
    user() {
      return this.$store.state.user;
    }
  }
})
export default class extends Vue {
  forEl: HTMLElement | any = "";
  mounted() {
    this.forEl = this.$refs.moreBtn;
  }
}
</script>
<style scoped src="./core-nav-user-component.scss" lang="scss"></style>
