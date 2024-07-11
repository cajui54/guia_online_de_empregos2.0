import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import ButtonBuger from "./_components/ButtonBurger";
import Navbar from "./_components/navbar";

const Header = () => {
  return (
    <header className={styles.containerHeader}>
      <Link href="/" className={styles.containerLogo}>
        <h1>
          <span>Guia Online</span>
          <span>De Empregos</span>
        </h1>
      </Link>

      <ButtonBuger />
      <Navbar />
    </header>
  );
};

export default Header;
