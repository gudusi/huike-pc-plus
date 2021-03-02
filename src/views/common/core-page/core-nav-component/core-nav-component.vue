<!--
    auto created by @ztwx vue3 template!!
    @pageAuthor  :  'zhan'
    @AuthorEmail :  zhantewei@gmail.com
    @pageCreated :  2021-3-1 11:6:16
-->

<template>
  <div class="yo-core-nav-list-wrapper">
    <yo-core-nav-item v-for="(i, index) in navData" :key="index" :i="i" />
  </div>
</template>

<script lang="tsx">
import { h, resolveDirective, withDirectives, Directive } from "vue";
import { Options, Vue } from "vue-class-component";
import { ioc } from "@voyo/core";
import { SettingService } from "@/voyo-gateway/setting.service";
import { NavListItem } from "@voyo/core/dest/utils";
import { Subscription } from "rxjs";

const settingService: SettingService = ioc.getService("yo-setting");

const NavItem = (props: any, context: any): any => {
  const i: NavListItem = props.i;
  if (!i) return null;
  const children: any = props.i && props.i.children;
  const hasChildren = !!(children && children.length);
  const rippleDirective: Directive = resolveDirective("yo-ripple") as Directive;

  return h("div", context.attrs, [
    withDirectives(
      h(
        "div",
        {
          class: [
            "yo-core-nav-item",
            "flex-between",
            i.open ? "__open" : "",
            i.active ? "__active" : ""
          ].join(" "),
          onClick: () => settingService.navItemClick(i)
        },
        [
          h("span", { class: "iflex-center" }, [
            i.icon
              ? h("i", { class: "yo-core-nav-item-icon za za-" + i.icon })
              : null,
            i.label
          ]),
          hasChildren
            ? h("span", { class: "yo-core-nav-item-open-icon" }, [
                h("i", { class: "za za-right" })
              ])
            : null
        ]
      ),
      [[rippleDirective]]
    ),

    i.open && hasChildren
      ? h(
          "div",
          {
            class: "yo-core-nav-item-children voyo-an-fadeIn"
          },
          children.map((i: NavListItem) => NavItem({ i }, {}))
        )
      : ""
  ]);
};

@Options({
  components: {
    "yo-core-nav-item": NavItem
  },
  watch: {
    "$route.path": {
      immediate: true,
      handler(v: string) {
        if (this.prePath === v) return;
        settingService.navPathChange(v);
        this.prePath = v;
      }
    }
  }
})
export default class extends Vue {
  prePath: string;
  navData: NavListItem[] = [];
  navDataOrder: Subscription;
  created() {
    this.navDataOrder = settingService
      .watchNavDataImmediate()
      .subscribe(navData => {
        this.navData = navData;
      });
  }
  unmounted() {
    this.navDataOrder.unsubscribe();
  }
}
</script>
<style scoped src="./core-nav-component.scss" lang="scss"></style>
