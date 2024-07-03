import React from "react";
import { PiSuitcaseSimpleFill } from "react-icons/pi";

import { ISites } from "@/app/interfaces/sites";
import Link from "next/link";
import styles from "./styles.module.scss";
const Item = ({ name, path, site }: ISites) => {
  return (
    <Link href={path} target="_blank" className={styles.containerItem}>
      <PiSuitcaseSimpleFill />

      <div className={styles.containerSite}>
        <div>
          <h2>{name}</h2>
        </div>
        <div>
          <span>{site}</span>
        </div>
      </div>
    </Link>
  );
};

export default Item;
