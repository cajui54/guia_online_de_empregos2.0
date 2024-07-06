import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import img from "../../assets/images/work07.jpg";
import { IHeroGlobal } from "@/app/interfaces/heroGlobal";
const HeroGlobal = ({ image, title, paragraph }: IHeroGlobal) => {
  return (
    <div className={styles.containerHero} id="anchorHome">
      <div className={styles.containerImage}>
        <div></div>
        <Image src={image.path} alt={image.description} />
      </div>
      <div className={styles.containerTitle}>
        <h2>
          <p>
            <span>{title.first}</span>
          </p>
          <p>
            <span>{title.second}</span>
          </p>
        </h2>
      </div>
      <p className={styles.containerInfo}>{paragraph}</p>
    </div>
  );
};

export default HeroGlobal;
