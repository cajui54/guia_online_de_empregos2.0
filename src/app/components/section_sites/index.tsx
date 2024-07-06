import React from "react";
import mainStyles from "../../main.module.scss";
import styles from "./styles.module.scss";
import Item from "./item";
import { datasSites } from "@/app/config/sites";
import Link from "next/link";
const SectionSites = () => {
  return (
    <div className={styles.containerSites} id="anchorSites">
      <div className={mainStyles.containerTitles}>
        <h2>Sites de</h2>
        <h2>Empregos</h2>
      </div>
      <div className={mainStyles.containerInfo}>
        <p>
          O
          <span>
            <strong> Guia Online </strong>
            <strong>de Empregos </strong>
          </span>
          separou alguns sites de empregos que valem apena você se cadastrar;
        </p>
      </div>

      <div className={styles.containerItems}>
        {datasSites.length > 0 &&
          datasSites.slice(0, 6).map((site, index) => (
            <div key={index}>
              <Item {...site} />
            </div>
          ))}
      </div>

      <div className={styles.containerLink}>
        <Link href="/pages/sites"> + Sites</Link>
      </div>
    </div>
  );
};

export default SectionSites;
