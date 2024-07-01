"use client";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import { configMenu } from "@/app/config/menu";
import { useContextMenu } from "@/app/context/contextMenu";
const ButtonBuger = () => {
  const { menu, setMenu } = useContextMenu();

  const handleClick = () => {
    if (!menu.status) {
      setMenu!(configMenu.open);
    } else {
      setMenu!(configMenu.close);
    }
  };
  return (
    <div
      className={`${styles.containerButtonBuger} ${menu.classMenu}`}
      onClick={handleClick}
    >
      <div></div>
    </div>
  );
};

export default ButtonBuger;
