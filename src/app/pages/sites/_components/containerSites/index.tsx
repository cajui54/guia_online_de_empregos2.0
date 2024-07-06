import React from "react";
import styles from "./styles.module.scss";
import Site from "./items";
import { datasSites } from "@/app/config/sites";

const ContainerSites = () => {
  return (
    <div className={styles.containerSite}>
      {datasSites.length > 0 &&
        datasSites.map((site, index) => (
          <div key={index}>
            <Site {...site} />
          </div>
        ))}
    </div>
  );
};

export default ContainerSites;
