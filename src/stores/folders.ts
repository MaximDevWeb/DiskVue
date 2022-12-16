import { defineStore } from "pinia";
import Http from "@/module/http";
import { useToastsStore } from "@/stores/toasts";
import { ToastType } from "@/types/toasts";
import type { FolderState } from "@/types/stores";
import router from "@/router";

export const useFoldersStore = defineStore("folders", {
  /**
   * State for Folder Store
   *
   * @state folders - list load folder
   * @state load - loading status
   * @state data - editable folder data
   * @state saving - saving status
   * @state modalFolderVisible - modal folder edit/create visible
   * @state errors - array of folder load/create/update errors
   */
  state: () =>
    <FolderState>{
      folders: [],
      load: false,
      data: {
        id: null,
        name: "",
      },
      saving: false,
      modalFolderVisible: false,
      errors: {},
    },

  actions: {
    /**
     * The function get prefix folder
     */
    getPrefix() {
      const route = router.currentRoute.value;
      return ((route.params.sub as Array<string>) || []).join("/");
    },

    /**
     * Error removal function
     */
    cleanErrors() {
      this.errors = {};
    },

    /**
     * The function of loading sub folders from the parents slug
     */
    async get() {
      const toastStore = useToastsStore();

      try {
        this.load = true;

        const response = await Http.inst.get(
          `folders?prefix=${this.getPrefix()}`
        );

        this.folders = response.data.folders;
      } catch (error: any) {
        toastStore.add("Folder not found", ToastType.danger);
      } finally {
        this.load = false;
      }
    },

    /**
     * The function remove data
     */
    cleanData() {
      this.data.name = "";
      this.data.id = null;
    },

    /**
     * The function of save sub folders
     */
    async save() {
      try {
        this.saving = true;
        const data = { ...this.data, prefix: this.getPrefix() };

        if (this.data.id) {
          await Http.inst.put(`folders/${this.data.id}`, data);
        } else {
          await Http.inst.post("folders", data);
        }

        this.modalFolderVisible = false;
        this.cleanData();

        await this.get();
      } catch (error: any) {
        this.errors = error.response.data.errors;
      } finally {
        this.saving = false;
      }
    },

    /**
     * The function of delete folder
     *
     * @param id
     */
    async delete(id: number): Promise<void> {
      const toastStore = useToastsStore();

      try {
        await Http.inst.delete("folders/" + id);
        await this.get();
      } catch (error: any) {
        toastStore.add("Folder deletion error", ToastType.danger);
      }
    },
  },
});
