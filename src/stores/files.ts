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
     * The function update file data
     */
    updateFileData(file: FileType) {
      this.editFile = file;

      this.files.forEach((item: FileType) => {
        if (item.id === file.id) {
          item.public_link = file.public_link;
        }
      });
    },

    /**
     * The function generate public page link
     *
     * @param hash
     */
    generatePublicPageLink(hash: string | null) {
      return hash ? `${window.location.origin}/link/${hash}` : null;
    },

    /**
     * The function copy file public link
     *
     * @param link
     */
    copyPublicLink(link: string) {
      const toastStore = useToastsStore();

      navigator.clipboard.writeText(link).then(() => {
        toastStore.add("Link copied");
      });
    },

    /**
     * The function load file list
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
     * The function delete File
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
     * The function update File
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
     * The function update file list
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
     * The function generate protected hash
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

    /**
     * The function generate public link
     *
     * @param id
     */
    async generatePublicLink(id: number) {
      const toastStore = useToastsStore();

      try {
        const response = await Http.inst.post("files/generate-public-link", {
          id,
        });

        toastStore.add("Public link generated");
        this.updateFileData(response.data.file);
      } catch (e) {
        toastStore.add("Error generating a public link", ToastType.danger);
      }
    },

    /**
     * The function delete public link
     *
     * @param id
     */
    async deletePublicLink(id: number) {
      const toastStore = useToastsStore();

      try {
        const response = await Http.inst.post("files/delete-public-link", {
          id,
        });

        toastStore.add("Public link deleted");
        this.updateFileData(response.data.file);
      } catch (e) {
        toastStore.add("Error deleting a public link", ToastType.danger);
      }
    },

    /**
     * The function load public link file
     *
     * @param hash
     */
    loadPublicLinkFile(hash: string) {
      return Http.inst.post("files/public-file", {
        hash,
      });
    },
  },
});
