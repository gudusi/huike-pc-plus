<!--
    auto created by @ztwx vue3 template!!
    @pageAuthor  :  'zhan'
    @AuthorEmail :  zhantewei@gmail.com
    @pageCreated :  2021-3-10 14:2:19
-->

<template>
  <teleport to="body">
    <transition name="yo-page-an">
      <div class="yo-page-modal-wrapper" v-if="show">
        <div class="yo-page-modal-bg"></div>
        <main class="yo-page-modal-container" @click.self="bgClick">
          <div class="yo-page-modal">
            <header class="yo-page-modal-header">
              <voyoc-btn-icon
                @voyoTap="cancel"
                v-if="isMobile"
                class="_back"
                type="pure"
                color="gentle"
              >
                <i class="za za-back"></i>
              </voyoc-btn-icon>
              {{ title }}
              <slot name="header"></slot>
              <text class="za za-close voyo-icon-input _close"></text>
            </header>
            <header
              v-if="isMobile"
              class="yo-page-modal-header-holder"
            ></header>

            <article class="yo-page-modal-article">
              <slot></slot>
            </article>
            <footer class="yo-page-modal-footer">
              <slot name="footer"></slot>
              <template v-if="autoFooter">
                <voyoc-btn type="candy" @voyoTap="confirm">确定</voyoc-btn>
                <voyoc-btn type="candy" @voyoTap="cancel" color="gentle"
                  >关闭</voyoc-btn
                >
              </template>
            </footer>
            <footer
              class="yo-page-modal-footer-holder"
              v-if="isMobile"
            ></footer>
          </div>
          <div class="yo-page-modal-footer-holder"></div>
          <div class="voyo-ios-safe-area-holder"></div>
        </main>
      </div>
    </transition>
  </teleport>
</template>

<script lang="ts">
import { Options, Vue, prop } from "vue-class-component";
import { ioc, ROUTER_CHANGE_IOC_NAME } from "@voyo/core";
import { RouterChangeService } from "@voyo/core/dest/router";
import { MediaHtml } from "@/styles/media-html";
import { Subscription } from "rxjs";

export class ModalProps {
  modelValue = prop<boolean>({ type: Boolean });
  clickBgClose = prop<boolean>({ type: Boolean, default: true });
  title = prop<string>({ type: String, default: "" });
  autoFooter = prop<boolean>({ type: Boolean, default: false });
  pushHistory = prop<boolean>({ type: Boolean, default: true });
}

@Options({
  emits: ["update:modelValue", "confirm"],
  watch: {
    modelValue: {
      handler(v: boolean) {
        if (v === this.show) return;
        if (v) {
          this.show = true;
          this.pushHistoryFn();
        } else {
          this.closeModal({});
        }
      }
    }
  }
})
export default class extends Vue.with(ModalProps) {
  show = false;
  mediaHtml: MediaHtml;
  mediaOrder: Subscription;
  routerService: RouterChangeService;
  routerChangeOrder: Subscription | null;
  historyCount: number;
  historyBackFromClose: boolean;
  isMobile = false;
  pushHistoryFn() {
    this.unsetRouterWatch();
    this.historyCount++;

    this.routerService.push(this.routerService.currentPurePath, {
      params: {
        modalPage: new Date().getTime() + ""
      }
    });
    this.routerChangeOrder = this.routerService.change.subscribe(
      ({ type }: any) => {
        if (type === "advance") {
          this.historyCount++;
        } else if (type === "back") {
          this.historyCount--;
        }
        if (!this.historyCount) {
          if (!this.historyBackFromClose)
            this.closeModal({ popHistory: false });
        }
        this.historyBackFromClose = false;
      }
    );
  }
  unsetRouterWatch() {
    this.historyCount = 0;
    if (this.routerChangeOrder) {
      this.routerChangeOrder.unsubscribe();
      this.routerChangeOrder = null;
    }
  }
  beforeCreate() {
    this.mediaHtml = ioc.getService("yo-media");
    this.routerService = ioc.getService(ROUTER_CHANGE_IOC_NAME);

    this.mediaOrder = this.mediaHtml.isMobileImmediate.subscribe(isMobile => {
      this.isMobile = isMobile;
    });
  }

  unmounted() {
    this.mediaOrder.unsubscribe();
    this.unsetRouterWatch();
  }

  closeModal({ popHistory = true }: { popHistory?: boolean }) {
    this.$emit("update:modelValue", (this.show = false));
    if (popHistory) {
      this.routerService.back();
      this.historyBackFromClose = true;
    }
  }
  bgClick(e: any) {
    if (this.clickBgClose) this.closeModal({});
  }

  confirm() {
    this.$emit("confirm", () => this.closeModal({}));
  }
  cancel() {
    this.closeModal({});
  }
}
</script>
<style scoped src="./page-modal-component.scss" lang="scss"></style>
