import React from "react";
import mainStyles from "../../main.module.scss";
import styles from "./styles.module.scss";
import { jobsByCategory } from "@/app/config/jobByCategory";
import CategoryItem from "./item";
const JobsByCategory = () => {
  return (
    <div className={styles.mainCategory}>
      <div className={mainStyles.containerTitles}>
        <h2>Vagas por</h2>
        <h2>Categoria</h2>
      </div>
      <div className={styles.containerCategory}>
        {jobsByCategory.length > 0 &&
          jobsByCategory.map((job, index) => (
            <div key={index}>
              <CategoryItem {...job} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default JobsByCategory;
