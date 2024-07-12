import { IJobByCategory } from "@/app/interfaces/job";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
const CategoryItem = ({ image, title, paragraph, path }: IJobByCategory) => {
  return (
    <Link href={path} className={styles.containerCategory}>
      <div className={styles.containerImage}>
        <div></div>
        <Image src={image} alt={title} />
      </div>
      <div className={styles.containerInformation}>
        <h2>{title}</h2>
        <p>{paragraph}</p>
        <span>+ Vagas de Empregos</span>
      </div>
    </Link>
  );
};

export default CategoryItem;
