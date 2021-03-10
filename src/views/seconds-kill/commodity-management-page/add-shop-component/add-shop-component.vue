<!--
    auto created by @ztwx vue3 template!!
    @pageAuthor  :  'zhan'
    @AuthorEmail :  zhantewei@gmail.com
    @pageCreated :  2021-3-10 11:0:28
-->

<template>
  <voyoc-btn @voyoTap="btnTap">+添加商品</voyoc-btn>

  <teleport to="body">
    <voyoc-dialog ref="dialog">
      <div>
        voyoc-dialog
      </div>
      <!--      <template #title>-->
      <!--        <haeder v-if="show2">-->
      <!--          <voyoc-tab-bar :value="0" @input="tabChange">-->
      <!--            <voyoc-tab-bar-item>1</voyoc-tab-bar-item>-->
      <!--            <voyoc-tab-bar-item>2</voyoc-tab-bar-item>-->
      <!--          </voyoc-tab-bar>-->
      <!--        </haeder>-->
      <!--      </template>-->
      <!--      <div>content{{ tabIndex }}</div>-->
      <!--      <template #footer v-if="tabIndex == 0">-->
      <!--        <voyoc-btn></voyoc-btn>-->
      <!--      </template>-->
    </voyoc-dialog>
  </teleport>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
@Options({})
export default class extends Vue {
  show = false;
  show2 = false;
  tabIndex = 0;
  dialog: any;
  btnTap() {
    this.dialog.open({});
  }
  tabChange(e: any) {
    this.tabIndex = e.detail;
  }
  mounted() {
    this.dialog = this.$refs.dialog;
  }
}
</script>
<style scoped src="./add-shop-component.scss" lang="scss"></style>
