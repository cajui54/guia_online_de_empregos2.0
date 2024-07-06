"use client";
import React from "react";
import styles from "./styles.module.scss";
import { configMenu, optionsJobs } from "@/app/config/menu";
import { Link } from "react-scroll";
import { useContextMenu } from "@/app/context/contextMenu";
const Navbar = () => {
  const { menu, setMenu } = useContextMenu();

  const handleSetActive = (to: any) => to;
  const handleCloseMenu = () => setMenu!(configMenu.close);

  return (
    <nav className={`${menu.classNavbar} ${styles.containerNavbar}`}>
      {optionsJobs.length > 0 &&
        optionsJobs.map((option, index) => (
          <Link
            key={index}
            {...option.config}
            onSetActive={handleSetActive}
            onClick={handleCloseMenu}
          >
            {<option.icon />}
            <span>{option.title}</span>
            <div></div>
          </Link>
        ))}
    </nav>
  );
};

export default Navbar;
