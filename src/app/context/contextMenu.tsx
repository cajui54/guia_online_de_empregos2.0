"use client";
import { useContext, createContext, useState } from "react";
import { IButtonMenu, IContextMenu } from "../interfaces/menu";
import { configMenu } from "../config/menu";
interface IChildrenNode {
  children: React.ReactNode;
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
