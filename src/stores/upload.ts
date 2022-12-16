import { defineStore } from "pinia";
import type { UploadData } from "@/types/stores";
import Http from "@/module/http";
import { useToastsStore } from "@/stores/toasts";
import { ToastType } from "@/types/toasts";
import { useFilesStore } from "@/stores/files";

/**
 * State for App Store
 *
 * @state uploadFiles - array upload files
 * @state progress - array of progress of uploaded files
 * @state cancels - array of load cancellation controllers
 */
export const useUploadStore = defineStore("upload", {
  state: () => ({
    files: [] as Array<File>,
    progress: [] as any,
    cancels: [] as any,
  }),
  actions: {
    /**
     * The function of add FileList in current FileList
     *
     * @param files - upload files
     */
    addFiles(files: FileList) {
      for (const file of files) {
        this.files.push(file);
      }
    },
    /**
     * The function of remove File from current FileList
     *
     * @param file - upload file
     */
    removeFile(file: File) {
      this.files = this.files.filter((item) => item.name !== file.name);
    },
    /**
     * The function of clean FileList
     */
    cleanFiles() {
      this.files = [];
    },
    /**
     * The function of upload file
     */
    async uploadFiles(data: UploadData) {
      const toastStore = useToastsStore();
      const fileStore = useFilesStore();

      /**
       * Packing the source data
       */
      const resp = new FormData();
      resp.append("file", data.file);
      resp.append("folder", data.folder);

      /**
       * Creating a cancellation controller
       */
      const abort = new AbortController();
      this.cancels[data.file.name] = abort;

      try {
        await Http.inst.post("files", resp, {
          signal: abort.signal,
          onUploadProgress: (progress) => {
            this.progress[data.file.name] = progress.progress;
          },
        });

        this.removeFile(data.file);
        toastStore.add(`File ${data.file.name} uploaded`);
        await fileStore.updateFileList(data.folder);
      } catch (e: any) {
        toastStore.add(
          `File ${data.file.name} was not uploaded`,
          ToastType.danger
        );
      }
    },
  },
});
