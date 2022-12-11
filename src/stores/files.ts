import { defineStore } from "pinia";

export const useFilesStore = defineStore("files", {
  /**
   * State for Files Store
   *
   * @state style - style for files list
   * @state filter - filter for files list
   */
  state: () => ({
    style: localStorage.getItem("style") ?? "list",
    filter: "",
  }),

  actions: {
    /**
     * The function set style
     *
     * @param style
     */
    setStyle(style: string) {
      this.style = style;
      localStorage.setItem("style", style);
    },
  },
});
