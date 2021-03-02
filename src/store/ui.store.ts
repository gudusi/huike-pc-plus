import { ActionContext, Module } from "vuex";
import {
  toRegistryDialog,
  toRegistryToast,
  toRegistryToastStrong,
  DialogOpenOpts,
  ToastStrongOpenOpts
} from "@voyo/core/dest/shortcut-components/index";

const dialogResult = toRegistryDialog();
const toastResult = toRegistryToast();
const toastStrongResult = toRegistryToastStrong();

export const uiStore: Module<any, any> = {
  state: {},
  actions: {
    dialog({}, opts: DialogOpenOpts) {
      dialogResult.open(opts);
    },
    toast({}, { message, dur }: { message: string; dur?: number }) {
      toastResult(message, dur);
    },
    toastStrong({}, opts: ToastStrongOpenOpts) {
      toastStrongResult.toastStrong(opts);
    },
    toastStrongClose({}) {
      toastStrongResult.toastStrongClose();
    }
  }
};
