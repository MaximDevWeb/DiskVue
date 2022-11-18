import { defineStore } from "pinia";
/**
 * State for App Store
 *
 * @state uploadFiles - array upload files
 */
export const useUploadStore = defineStore("upload", {
  state: () => ({
    files: [] as Array<File>,
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
  },
});
