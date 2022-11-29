import { defineStore } from "pinia";
import type { Confirm } from "@/types/app";
/**
 * State for App Store
 *
 * @state search - search string
 * @state confirm - confirm data
 */
export const useAppStore = defineStore("app", {
  state: () => ({
    search: "",
    confirm: {
      message: "Confirm",
      callback: null,
      callbackArgs: null,
      visible: false,
    } as Confirm,
  }),
  actions: {
    /**
     * The function set confirm data
     *
     * @param message
     * @param callback
     * @param callbackArgs
     */
    setConfirm(message: string, callback: Function, callbackArgs: any = null) {
      this.confirm.message = message;
      this.confirm.callback = callback;
      this.confirm.callbackArgs = callbackArgs;
      this.confirm.visible = true;
    },
    /**
     * The function clean confirm data
     */
    closeConfirm() {
      this.confirm.callback = null;
      this.confirm.callbackArgs = null;
      this.confirm.visible = false;
    },
  },
});
