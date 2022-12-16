import { defineStore } from "pinia";
import Http from "@/module/http";
import { useToastsStore } from "@/stores/toasts";
import { ToastType } from "@/types/toasts";
import type { FileType } from "@/types/stores";
import { useRoute } from "vue-router";
import router from "@/router";

export const useFilesStore = defineStore("files", {
  /**
   * State for Files Store
   *
   * @state style - style for files list
   * @state filter - filter for files list
   * @state files - files list
   * @state load - loading status
   */
  state: () => ({
    style: localStorage.getItem("style") ?? "list",
    filter: "",
    files: [] as Array<FileType>,
    load: false,
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
    /**
     * Load file list
     */
    async loadFilesList(folder: string) {
      const toastStore = useToastsStore();

      try {
        this.load = true;

        const response = await Http.inst.get("files?folder=" + folder);
        this.files = response.data.files;
      } catch (e: any) {
        toastStore.add("File upload error", ToastType.danger);
      } finally {
        this.load = false;
      }
    },
    /**
     * Update file list
     */
    async updateFileList(folder: string) {
      const route = router.currentRoute.value;
      let currentFolder = route.params.sub
        ? (route.params.sub as Array<string>)
        : [];

      if (currentFolder.join("/") === folder) {
        await this.loadFilesList(folder);
      }
    },
  },
});
