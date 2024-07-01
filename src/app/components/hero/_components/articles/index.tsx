import React from "react";
import styles from "./styles.module.scss";
const ArticleHero = () => {
  return (
    <article className={styles.containerArticle}>
      <div className={styles.containerTitles}>
        <h2>Guia Online</h2>
        <h2>de Empregos</h2>
      </div>
      <p>
        Procurar emprego agora ficou fácil, aqui nós te direcionamos para Sites
        de Empregos aumentando a sua possibilidade de conseguir sua tão sonhada
        vaga de emprego, compartilhe com amigos e familiares. acelere ainda mais
        a sua recolocação no mercado de trabalho
      </p>
    </article>
  );
};

export default ArticleHero;
