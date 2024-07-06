"use client";
import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import { images } from "@/app/config/hero";
import ArticleHero from "./_components/articles";

const Hero = () => {
  const [index, setIndex] = React.useState<number>(0);
  setTimeout(() => {
    if (index < images.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }, 5000);
  return (
    <div className={styles.containerHero} id="anchorHome">
      <div className={styles.containerImg}>
        <div></div>
        <Image src={images[index].path} alt={images[index].title} />
      </div>
      <ArticleHero />
    </div>
  );
};

export default Hero;
