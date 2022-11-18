import { defineStore } from "pinia";
/**
 * State for App Store
 *
 * @state search - search string
 * @state modalFolderVisible - visible/invisible state
 */
export const useAppStore = defineStore("app", {
  state: () => ({
    search: "",
    modalFolderVisible: false,
  }),
});
