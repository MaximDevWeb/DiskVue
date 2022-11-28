import { defineStore } from "pinia";
/**
 * State for App Store
 *
 * @state search - search string
 */
export const useAppStore = defineStore("app", {
  state: () => ({
    search: "",
  }),
});
