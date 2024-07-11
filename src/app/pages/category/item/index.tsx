import React, { ReactNode } from "react";
import styles from "./styles.module.scss";
import { IconType } from "react-icons";
import { FaComputer } from "react-icons/fa6";
import Link from "next/link";

interface JobItem {
  icon: IconType;
  title: string;
  description: string;
  path: string;
}
const ItemJob = ({ icon: Icon, title, description, path }: JobItem) => {
  return (
    <Link href={path} target="_blank" className={styles.containerItem}>
      <Icon />
      <div>
        <h2>{title}</h2>
        <p>{description}</p>

        <span>+ Informações</span>
      </div>
    </Link>
  );
};

export default ItemJob;
