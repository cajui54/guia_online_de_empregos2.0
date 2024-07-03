import React from "react";
import mainStyles from "../../main.module.scss";
import Link from "next/link";
const SectionArticle = () => {
  return (
    <div className={mainStyles.containerArticle}>
      <div className={mainStyles.containerTitles}>
        <h2>Redes Sociais </h2>
        <h2>de Empregos</h2>
      </div>

      <article className={mainStyles.article}>
        <section>
          <h2>Linkedin.</h2>
          <p>
            Da Microsoft, o
            <Link href="https://www.linkedin.com/feed/">Linkedin.</Link>é a
            principal rede social quando se pensa em vagas de emprego ou
            networking. Oportunidades podem ser publicadas diretamente pela
            plataforma, mas vale ficar atento às postagens de outros usuários
            por lá, quais podem indicar uma nova posição aberta na empresa em
            que trabalham.
          </p>
        </section>

        <section>
          <h2>beBee.</h2>
          <p>
            Similar ao LinkedIn, a{" "}
            <Link href="https://www.bebee.com/">bebee.com</Link>
            se define como uma rede de marca pessoal, para que profissionais de
            promovam diante de recrutadores e também criem uma rede de contatos.
            Há o chamado “colmeias”, quais funcionam como comunidades e nichos
            para reunir usuários em um mesmo assunto ou categoria. Apesar do
            aspecto social, vagas também podem ser encontradas publicadas na
            beBee.
          </p>
        </section>

        <section>
          <h2>Indeed.</h2>
          <p>
            Um dos mais populares, o{" "}
            <Link href="https://br.indeed.com/?from=gnav-homepage">
              indeed.com.br
            </Link>
            reúne cerca de 250 milhões de visitas mensais. Também não há nenhum
            custo para o candidato que cadastra o currículo e procura emprego na
            plataforma. Um ponto interessante da busca é que ela reconhece vagas
            similares. Então, mesmo que você digite alguma posição, pode
            aparecer outras sugestões, como jornalista e assessor de imprensa,
            por exemplo. Também há um comparador de salários, o qual exibe um
            máximo e mínimo para um determinado cargo. Os dados são fornecidos
            por terceiros ao Indeed e são “aproximados”, de acordo com a
            plataforma. Pode ser uma ferramenta para negociação na hora da
            contratação
          </p>
        </section>
      </article>
    </div>
  );
};

export default SectionArticle;
