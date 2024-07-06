import Link from "next/link";
import React from "react";
import styles from "./styles.module.scss";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";
import { GiStrong } from "react-icons/gi";
import { TiShoppingCart } from "react-icons/ti";

const Contact = () => {
  return (
    <div className={styles.containerContact} id="anchorContact">
      <h2>Dicas e sugestãos</h2>
      <div>
        <Link href="https://www.linkedin.com/in/jacksoncajui/" target="_blank">
          <IoLogoLinkedin />
          <span>Linkedin.</span>
        </Link>

        <Link href="https://imc-jks.vercel.app/" target="_blank">
          <GiStrong />
          <span>IMC</span>
        </Link>

        <Link href="https://smart-purchases.vercel.app/" target="_blank">
          <TiShoppingCart />
          <span>Smart Buy</span>
        </Link>

        <Link
          href="https://www.facebook.com/profile.php?id=61561263101079"
          target="_blank"
        >
          <FaFacebookSquare />
          <span>Facebook</span>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
