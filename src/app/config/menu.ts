import { IMenuOpen, IOptionNavbar } from "../interfaces/menu";
import { BiSolidHome } from "react-icons/bi";
import { FaGlobe } from "react-icons/fa";
import { FaPeopleCarryBox } from "react-icons/fa6";
import { BsPersonWorkspace } from "react-icons/bs";
import { FaHelmetSafety } from "react-icons/fa6";
import { MdOutlineContactEmergency } from "react-icons/md";

export const configMenu: IMenuOpen = {
  open: { status: true, classMenu: "open", classNavbar: "" },
  close: { status: false, classMenu: "", classNavbar: "openNav" },
};

export const optionsJobs: IOptionNavbar[] = [
  {
    title: "Home",
    icon: BiSolidHome,
    config: {
      activeClass: "active",
      to: "anchorHome",
      offset: -70,
      spy: true,
      smooth: true,
      duration: 500,
    },
  },
  {
    title: "Sites",
    icon: FaGlobe,
    config: {
      activeClass: "active",
      to: "anchorSites",
      offset: -80,
      spy: true,
      smooth: true,
      duration: 500,
    },
  },
  {
    title: "Empregos",
    icon: FaPeopleCarryBox,
    config: {
      activeClass: "active",
      to: "anchorJobs",
      offset: -90,
      spy: true,
      smooth: true,
      duration: 500,
    },
  },
  {
    title: "Dicas",
    icon: BsPersonWorkspace,
    config: {
      activeClass: "active",
      to: "ancorTips",
      offset: -90,
      spy: true,
      smooth: true,
      duration: 500,
    },
  },
  {
    title: "Informações",
    icon: FaHelmetSafety,
    config: {
      activeClass: "active",
      to: "anchorInformation",
      offset: -90,
      spy: true,
      smooth: true,
      duration: 500,
    },
  },
  {
    title: "Contatos",
    icon: MdOutlineContactEmergency,
    config: {
      activeClass: "active",
      to: "anchorContact",
      offset: -70,
      spy: true,
      smooth: true,
      duration: 500,
    },
  },
];
