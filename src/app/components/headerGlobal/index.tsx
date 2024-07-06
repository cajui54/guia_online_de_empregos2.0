import React from "react";
import Logo from "../logo";
import styles from "./styles.module.scss";
import Link from "next/link";
import { TiArrowBackOutline } from "react-icons/ti";

const HeaderGlobal = () => {
  return (
    <header className={styles.containerHeader}>
      <Logo goTo="anchorHome" />
      <Link href="/" className={styles.containerButton}>
        <TiArrowBackOutline />
        <p>Voltar</p>
      </Link>
    </header>
  );
};

export default HeaderGlobal;
