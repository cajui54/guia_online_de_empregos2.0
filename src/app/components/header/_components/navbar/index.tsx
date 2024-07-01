"use client";
import React from "react";
import styles from "./styles.module.scss";
import { optionsJobs } from "@/app/config/menu";
import Link from "next/link";
import { useContextMenu } from "@/app/context/contextMenu";
const Navbar = () => {
  const { menu } = useContextMenu();
  return (
    <nav className={`${menu.classNavbar} ${styles.containerNavbar}`}>
      {optionsJobs.length > 0 &&
        optionsJobs.map((option, index) => (
          <Link href={option.path} key={index}>
            <span>{option.title}</span>
            <div></div>
          </Link>
        ))}
    </nav>
  );
};

export default Navbar;
