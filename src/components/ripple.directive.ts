import { handleRipple, RippleOpts } from "@voyo/core/dest/utils/ripple";
import { DirectiveBinding } from "vue";

export const ripple = {
  mounted(el: HTMLElement, binding: DirectiveBinding<RippleOpts>) {
    const opts: RippleOpts = binding.value || {};
    if (opts.autoSize === undefined) opts.autoSize = true;
    handleRipple(el, opts);
  }
};
