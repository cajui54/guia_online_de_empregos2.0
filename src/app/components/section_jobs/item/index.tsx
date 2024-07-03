import { IJobs } from "@/app/interfaces/sites";
import Link from "next/link";
import React from "react";
import { MdContentPasteSearch } from "react-icons/md";

import styles from "./styles.module.scss";

const ItemJob = ({ title, description, path }: IJobs) => {
  return (
    <div className={styles.containerItemJob}>
      <Link href={path} target="_blank">
        <MdContentPasteSearch />
      </Link>
      <div className={styles.containerInfo}>
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <Link href={path} target="_blank">
          + Informações
        </Link>
      </div>
    </div>
  );
};

export default ItemJob;
