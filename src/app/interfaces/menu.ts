import { ReactNode } from "react";
import { IconType } from "react-icons";

export interface IButtonMenu {
  status: boolean;
  classMenu: string;
  classNavbar: string;
}

export interface IOptionNavbar {
  title: string;
  icon: IconType;
  config: {
    activeClass: string;
    to: string;
    spy: boolean;
    offset: number;
    smooth: boolean;
    duration: number;
  };
}

export interface IMenuOpen {
  open: IButtonMenu;
  close: IButtonMenu;
}
