import React from "react";
import mainStyles from "../../main.module.scss";

const SectionInformation = () => {
  return (
    <div className={mainStyles.containerArticle} id="anchorInformation">
      <article className={mainStyles.article}>
        <section>
          <h2>Direitos Trabalhistas</h2>
          <p>
            Os direitos trabalhistas podem variar significativamente de acordo
            com o país e a legislação local. Abaixo estão alguns dos direitos
            trabalhistas comuns que são frequentemente abordados nas
            legislações:
          </p>
        </section>

        <section>
          <ul>
            <li>
              <h2>Remuneração Justa:</h2>
              <p>
                Os trabalhadores têm o direito de receber uma remuneração justa
                e igual por trabalho igual ou de valor semelhante, sem
                discriminação.
              </p>
            </li>
            <li>
              <h2>Horas de Trabalho:</h2>
              <p>
                Limitações nas horas de trabalho, incluindo horas extras e
                direitos a descanso e folgas.
              </p>
            </li>
            <li>
              <h2>Saúde e Segurança no Trabalho:</h2>
              <p>
                O direito a um ambiente de trabalho seguro e saudável, com
                regulamentos para prevenir acidentes e doenças ocupacionais.
              </p>
            </li>
            <li>
              <h2>Férias Remuneradas:</h2>
              <p>
                Proteção contra discriminação com base em raça, gênero,
                religião, idade, deficiência, orientação sexual, entre outros.
              </p>
            </li>
            <li>
              <h2>Aviso Prévio:</h2>
              <p>
                Notificação antecipada ao empregado ou empregador em caso de
                rescisão do contrato de trabalho.
              </p>
            </li>

            <li>
              <h2>Indenização por Demissão Injusta:</h2>
              <p>
                Em alguns casos, os trabalhadores têm direito a indenização se
                forem demitidos injustamente.
              </p>
            </li>
            <li>
              <h2>Licença Médica e Benefícios:</h2>
              <p>
                Direito a licença médica remunerada, seguro saúde e outros
                benefícios
              </p>
            </li>
            <li>
              <h2>Igualdade de Oportunidades:</h2>
              <p>
                Direito a licença médica remunerada, seguro saúde e outros
                benefícios.
              </p>
            </li>
          </ul>
        </section>
      </article>
    </div>
  );
};

export default SectionInformation;
