import React from "react";
import styles from "./styles.module.scss";
import HeaderGlobal from "@/app/components/headerGlobal";
import HeroGlobal from "@/app/components/heroGlobal";
import { configHeroGlobal } from "@/app/config/heroGlobal";
import ContainerSites from "./_components/containerSites";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guia Online de Empregos - Sites de Empregos",
  description:
    "O Guia Online de Empregos trouxe + de 50 sites de empregos para acelerar sua recolocação no mercado de trabalha",
  keywords: "empregos, estágio, guia online de empregos, concurso",
};
const MainSite = () => {
  return (
    <div className={styles.containerSites}>
      <HeaderGlobal />
      <HeroGlobal {...configHeroGlobal} />
      <ContainerSites />
    </div>
  );
};

export default MainSite;
