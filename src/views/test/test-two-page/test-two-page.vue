<!--
    auto created by @ztwx vue3 template!!

    @pageAuthor  :  'zhan'
    @AuthorEmail :  zhantewei@gmail.com
    @pageCreated :  2021-3-1 10:13:21
-->

<template src="./test-two-page.html"> </template>

<script lang="ts">
import { defineAsyncComponent } from "vue";
import { Options, Vue } from "vue-class-component";

@Options({
  components: {
    "self-qrcode": defineAsyncComponent(() =>
      import("@/componentsAsync/qrcode-component/qrcode-component.vue")
    )
  }
})
export default class extends Vue {
  height = 150;
  width = 150;
  tap(e: any) {
    const qrcode: any = this.$refs.qrcode;
    qrcode.generate("http://www.baidu.com");
  }
}
</script>
<style scoped src="./test-two-page.scss" lang="scss"></style>
