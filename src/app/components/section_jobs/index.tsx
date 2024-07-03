import React from "react";
import mainStyles from "../../main.module.scss";
import styles from "./styles.module.scss";
import { dataJobs } from "@/app/config/jobs";
import ItemJob from "./item";

const SectionJobs = () => {
  return (
    <div className={styles.containerSectionJobs}>
      <div className={mainStyles.containerTitles}>
        <h2>Vagas de</h2>
        <h2>Empregos</h2>
      </div>

      <div className={mainStyles.containerInfo}>
        <p>
          O
          <span>
            <strong> Guia Online </strong>
            <strong>de Empregos </strong>
          </span>
          separou algumas vagas de empregos para você se cadastrar;
        </p>
      </div>

      <div className={styles.containerJobsItems}>
        {dataJobs.length > 0 &&
          dataJobs.map((job, index) => (
            <div key={index}>
              <ItemJob {...job} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default SectionJobs;
