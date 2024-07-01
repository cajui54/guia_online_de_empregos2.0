export interface IButtonMenu {
  status: boolean;
  classMenu: string;
  classNavbar: string;
}

export interface IOptionNavbar {
  path: string;
  title: string;
}

export interface IMenuOpen {
  open: IButtonMenu;
  close: IButtonMenu;
}
