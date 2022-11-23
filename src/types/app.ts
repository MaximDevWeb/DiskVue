export type MenuItem = {
  name: string;
  icon: string;
};

export type Breadcrumbs = {
  link?: string;
  name: string;
};

export type Folder = {
  id: number;
  name: string;
  slug: string;
  sub_folders_count: number;
  files_count: number;
  files_size: number;
};
