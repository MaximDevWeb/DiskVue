export type Folder = {
  id: number;
  name: string;
  slug: string;
  sub_folders_count: number;
  files_count: number;
  files_size: number;
};

export type FolderData = {
  id: null | number;
  name: string;
};

export type FolderState = {
  folders: Array<Folder>;
  load: boolean;
  data: FolderData;
  saving: boolean;
  modalFolderVisible: boolean;
  errors: {
    name?: Array<string>;
  };
};