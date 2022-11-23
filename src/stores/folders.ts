import { defineStore } from "pinia";
import Http from "@/module/http";
import { useToastsStore } from "@/stores/toasts";
import { ToastType } from "@/types/toasts";

export const useFoldersStore = defineStore("folders", {
  /**
   * State for Folder Store
   *
   * @state folders - list load folder
   * @state load - loading status
   */
  state: () => ({
    folders: [],
    load: false,
  }),

  actions: {
    /**
     * The function of loading sub folders from the parents slug
     *
     * @param slug
     */
    async get(slug: string): Promise<void> {
      const toastStore = useToastsStore();

      try {
        this.load = true;

        const response = await Http.inst.get("folders?slug=" + slug);
        this.folders = response.data.folders;
      } catch (e: any) {
        toastStore.add("Folder not found", ToastType.danger);
      } finally {
        this.load = false;
      }
    },
  },
});
