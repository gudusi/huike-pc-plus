<!--
    auto created by @ztwx vue3 template!!
    @pageAuthor  :  'zhan'
    @AuthorEmail :  zhantewei@gmail.com
    @pageCreated :  2021-3-9 10:17:54
-->

<template>
  <div>
    <canvas ref="canvas" id="canvas" :width="width" :height="height"></canvas>
  </div>
</template>

<script lang="ts">
import { Options, Vue, prop } from "vue-class-component";
const QRCode = require("qrcode");

class QrCodeProps {
  width = prop<number>({ type: Number, default: 100 });
  height = prop<number>({ type: Number, default: 100 });
}

@Options({})
export default class extends Vue.with(QrCodeProps) {
  mounted() {}
  generate(msg: string): Promise<boolean | string> {
    return new Promise((resolve, reject) => {
      const canvas: HTMLElement = this.$refs.canvas as HTMLElement;
      QRCode.toCanvas(canvas, msg, (err: string) => {
        if (err) {
          reject(err);
          console.error(err);
          return;
        }
        console.debug("qrcode generate success!");
        resolve(true);
      });
    });
  }
}
</script>
<style scoped src="./qrcode-component.scss" lang="scss"></style>
