import React from "react";
import styles from "./styles.module.scss";
import HeaderGlobal from "@/app/components/headerGlobal";
import HeroGlobal from "@/app/components/heroGlobal";
import { configHeroGlobal } from "@/app/config/heroGlobal";
import ContainerSites from "./_components/containerSites";
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
