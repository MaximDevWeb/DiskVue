export type MenuItem = {
  name: string;
  icon: string;
};

export type Breadcrumbs = {
  link?: string;
  name: string;
};

export type Confirm = {
  message: string;
  callback: Function | null;
  callbackArgs: any;
  visible: boolean;
};
