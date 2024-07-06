import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";
import { FaGlobe } from "react-icons/fa";
import { ISites } from "@/app/interfaces/sites";

const Site = ({ name, path, site }: ISites) => {
  return (
    <Link href={path} target="_blank" className={styles.containerItem}>
      <FaGlobe />
      <div>
        <h2>{name}</h2>
        <span>{site}</span>
      </div>
    </Link>
  );
};

export default Site;
