import { defineStore } from "pinia";
import Http from "@/module/http";
import { useToastsStore } from "@/stores/toasts";
import { ToastType } from "@/types/toasts";
import type { FileType } from "@/types/stores";
import router from "@/router";

export const useFilesStore = defineStore("files", {
  /**
   * State for Files Store
   *
   * @state style - style for files list
   * @state filter - filter for files list
   * @state files - files list
   * @state load - loading status
   * @state editFile - current edit file
   * @state modalFileVisible - modal folder edit/create visible
   * @state saving - saving status
   */
  state: () => ({
    style: localStorage.getItem("style") ?? "list",
    filter: "",
    files: [] as Array<FileType>,
    load: false,
    editFile: null as FileType | null,
    modalFileVisible: false,
    saving: false,
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
     *
     * @param folder
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
     * Delete File
     *
     * @params id
     */
    async deleteFile(id: number) {
      const toastStore = useToastsStore();

      try {
        await Http.inst.delete(`files/${id}`);

        toastStore.add("File deleted");
        await this.updateFileList("", true);
      } catch (e: any) {
        toastStore.add("File Deletion error", ToastType.danger);
      } finally {
        this.editFile = null;
      }
    },

    /**
     * Update File
     *
     * @param id
     * @param name
     */
    async updateFile(id: number, name: string) {
      const toastStore = useToastsStore();

      try {
        await Http.inst.put(`files/${id}`, { id, name });

        toastStore.add("File has been updated");
        if (this.editFile) this.editFile.name = name;
        this.modalFileVisible = false;
      } catch (error: any) {
        toastStore.add("File update error", ToastType.danger);
      }
    },

    /**
     * Update file list
     *
     * @param folder
     * @param current
     */
    async updateFileList(folder: string, current: boolean = false) {
      const route = router.currentRoute.value;
      let currentFolder = (
        route.params.sub ? (route.params.sub as Array<string>) : []
      ).join("/");

      if (currentFolder === folder || current) {
        await this.loadFilesList(currentFolder);
      }
    },
    /**
     * Generate protected hash
     */
    async generateHashLink(): Promise<string | undefined> {
      const toastStore = useToastsStore();

      try {
        const response = await Http.inst.post("hash/generate");
        return response.data.hash;
      } catch (e) {
        toastStore.add("Link generate error", ToastType.danger);
      }
    },
  },
});
