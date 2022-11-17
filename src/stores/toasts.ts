import { defineStore } from "pinia";
import type { Toast } from "@/types/toasts";
import { ToastType } from "@/types/toasts";
import { randString } from "@/helpers/random";

export const useToastsStore = defineStore("toasts", {
  /**
   * State for Toasts Store
   *
   * @state toasts - array toast elements
   */
  state: () => ({
    toasts: [] as Array<Toast>,
  }),

  actions: {
    /**
     * The function add toast
     *
     * @param message - toast message
     * @param type - toast type
     */
    add(message: string, type: ToastType = ToastType.default): void {
      const toast = {
        id: randString(),
        type: type,
        message: message,
      };

      this.toasts.unshift(toast);
    },
    /**
     * The function remove toast by id
     *
     * @param id - toast id
     */
    remove(id: string): void {
      this.toasts = this.toasts.filter((toast: Toast) => toast.id !== id);
    },
  },
});
