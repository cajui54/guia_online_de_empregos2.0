"use client";
import {
  useContext,
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import { IButtonMenu } from "../interfaces/menu";
import { configMenu } from "../config/menu";
interface IChildrenNode {
  children: React.ReactNode;
}
interface IContextMenu {
  menu: IButtonMenu;
  setMenu?: Dispatch<SetStateAction<IButtonMenu>>;
}
export const ContextMenu = createContext<IContextMenu>({
  menu: configMenu.close,
});

export const ContextMenuProvider = ({ children }: IChildrenNode) => {
  const [menu, setMenu] = useState<IButtonMenu>(configMenu.close);

  return (
    <ContextMenu.Provider value={{ menu, setMenu }}>
      {children}
    </ContextMenu.Provider>
  );
};

export const useContextMenu = () => {
  return useContext(ContextMenu);
};
