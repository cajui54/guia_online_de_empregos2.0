import { IMenuOpen, IOptionNavbar } from "../interfaces/menu";

export const configMenu: IMenuOpen = {
  open: { status: true, classMenu: "open", classNavbar: "" },
  close: { status: false, classMenu: "", classNavbar: "openNav" },
};

export const optionsJobs: IOptionNavbar[] = [
  { path: "/home", title: "Home" },
  { path: "/site-jobs", title: "Sites" },
  { path: "/section-jobs", title: "Empregos" },
  { path: "/about", title: "Sobre nós" },
  { path: "/readmore", title: "Informações" },
];
