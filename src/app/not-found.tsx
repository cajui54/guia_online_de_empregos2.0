import React from "react";
import { TiArrowBackOutline } from "react-icons/ti";
import imgAstro from "../app/assets/images/astro.png";
import mainStyles from "./main.module.scss";
import Link from "next/link";
import Image from "next/image";
import HeaderGlobal from "./components/headerGlobal";
const NotFound = () => {
  return (
    <div className={mainStyles.mainNotFound}>
      <HeaderGlobal />
      <div className={mainStyles.notFoundTitles}>
        <h3>Error 404</h3>
        <h3>Not Found</h3>
        <Link href="/">
          <TiArrowBackOutline />
          Voltar
        </Link>
        <Image src={imgAstro} alt="astronauta" />
      </div>
    </div>
  );
};

export default NotFound;
