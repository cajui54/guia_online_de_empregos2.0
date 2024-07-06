"use client";
import { Link } from "react-scroll";
import React from "react";
import styles from "./styles.module.scss";
interface IAnchor {
  goTo: string;
}
const Logo = ({ goTo }: IAnchor) => {
  return (
    <>
      <Link
        to={goTo}
        offset={-70}
        smooth={true}
        duration={500}
        className={styles.containerLogo}
      >
        <h1>
          <p>
            <span>Guia</span>
            <span>Online</span>
          </p>
          <p>
            <span>De</span>
            <span>Empregos</span>
          </p>
        </h1>
      </Link>
    </>
  );
};

export default Logo;
