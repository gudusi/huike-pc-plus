import { VoyoComponent, VoyoEventEmitter } from "@voyo/core/dest/components";
import { VoyoDor, VoyoInput, VoyoTemplate } from "@voyo/core/dest/components";
import { RelativeFixed } from "@voyo/core/dest/utils/RelativeFixed";
import { ClassManage } from "@voyo/core/dest/utils/ClassManage";
import { ExcuteAfterConnected } from "@voyo/core/dest/components/utils/excuteAfterConnected";
import { Animate } from "@voyo/core/dest/utils";

export class ForElement extends HTMLElement {
  voyocMenuForElListenerName: any;
}

export type MenuPosition = "top" | "left" | "right" | "bottom";
export type MenuType = "menu";

@VoyoDor({
  template: `
<span id="voyo-menu-ancestor">
  <div class="voyo-menu-wrapper">
    <div class="_layout-bg"></div>
    <article class="voyo-menu-content">
      <slot name="menu"></slot>
      <span class="voyo-menu-content-body"></span>
    </article>
  </div>
</span>
  `,
  styles: `
.voyo-menu-wrapper{display:none}
  `
})
export class MenuComponent extends VoyoComponent {
  relativeFixed: RelativeFixed = new RelativeFixed(5, 10);
  wrapperEl: HTMLElement;
  contentSlot: HTMLSlotElement;
  contentBodyEl: HTMLElement;
  contentEl: HTMLElement;
  insertFragment: DocumentFragment;
  ancestorEl: HTMLElement;
  _forEl: HTMLElement;
  bgEl: HTMLElement;
  wrapperClassManage: ClassManage;
  position: MenuPosition;
  executeAfterConnected: ExcuteAfterConnected = new ExcuteAfterConnected();
  animationState: "show" | "hide";
  @VoyoInput({ name: "position", defaultValue: "bottom" })
  set setPosition(v: MenuPosition) {
    this.position = v;
    this.executeAfterConnected.execute(() => {
      this.wrapperClassManage.replaceClass("position", "__position-" + v);
    });
  }
  @VoyoInput({ name: "clickTrigger", defaultValue: true })
  clickTrigger: boolean;
  @VoyoInput({ name: "forEl" })
  @VoyoInput({ name: "type", defaultValue: "menu" })
  set type(v: MenuType) {
    this.executeAfterConnected.execute(() => {
      this.wrapperClassManage.replaceClass("type", "__type-" + v);
    });
  }

  set forEl(el: ForElement) {
    if (el instanceof HTMLElement) {
      this._forEl = el;
      if (el.voyocMenuForElListenerName) return;
      if (this.clickTrigger) {
        el.voyocMenuForElListenerName = (e: Event) => {
          this.open(e);
        };
        el.addEventListener("click", el.voyocMenuForElListenerName);
      }
    }
  }

  created() {
    this.ancestorEl = this.shadowRoot.querySelector("#voyo-menu-ancestor");
    this.wrapperEl = this.shadowRoot.querySelector(".voyo-menu-wrapper");
    this.contentEl = this.shadowRoot.querySelector(".voyo-menu-content");
    this.contentSlot = this.shadowRoot.querySelector("slot[name='menu']");
    this.contentBodyEl = this.shadowRoot.querySelector(
      ".voyo-menu-content-body"
    );
    this.bgEl = this.shadowRoot.querySelector("._layout-bg");
    this.wrapperClassManage = new ClassManage(this.wrapperEl);
    this.insertFragment = document.createDocumentFragment();
    this.listenBgEl();
    this.listenContentAnimate();
    this.executeAfterConnected.connect();
  }

  open(e: Event) {
    if (!this._forEl) throw new Error("ForEl must be specified!");
    // document.body.appendChild(this.wrapperEl);
    const assignedNodes: any = [...this.contentSlot.assignedNodes()];
    document.body.appendChild(this.wrapperEl);

    if (assignedNodes && assignedNodes.length) {
      assignedNodes.forEach((el: HTMLElement) =>
        this.insertFragment.appendChild(el)
      );
    }
    this.contentBodyEl.appendChild(this.insertFragment);
    this.wrapperShow(true);

    const { top, left } = this.relativeFixed.relativePosition(
      this.contentEl,
      this._forEl,
      this.position
    );
    this.setTargetPosition(top, left);
  }

  setTargetPosition(top: number, left: number) {
    this.contentEl.style.top = Math.round(top) + "px";
    this.contentEl.style.left = Math.round(left) + "px";
  }
  closeStart() {
    // this.closeEnd();
    this.wrapperShow(false);
  }
  wrapperShow(show: boolean) {
    this.wrapperClassManage.replaceClass("display", show ? "__show" : "__hide");
    this.animationState = show ? "show" : "hide";
  }

  closeEnd() {
    this.wrapperShow(false);
    this.contentSlot.appendChild(this.insertFragment);
    this.ancestorEl.appendChild(this.wrapperEl);
  }
  listenBgEl() {
    this.bgEl.addEventListener("click", () => {
      this.closeStart();
    });
  }
  listenContentAnimate() {
    this.contentEl.addEventListener("animationend", (e: AnimationEvent) => {
      if (e.target !== this.contentEl) return;
      this.wrapperEl.classList.remove("__show", "__hide");
      if (this.animationState === "hide") {
        this.closeEnd();
      }
    });
  }
}
