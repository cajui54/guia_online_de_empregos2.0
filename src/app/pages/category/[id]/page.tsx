import HeaderGlobal from "@/app/components/headerGlobal";
import HeroGlobal from "@/app/components/heroGlobal";
import { jobsByCategory } from "@/app/config/jobs";
import styles from "./styles.module.scss";
import React from "react";
import ItemJob from "../item";
interface IPropsParam {
  params: { id: string };
}
const ContainerJobs = ({ params }: IPropsParam) => {
  const Datasfound = jobsByCategory.find((job) => job.category === params.id);

  return (
    <main className={styles.containerCategoryJobs}>
      <HeaderGlobal />
      {Datasfound && <HeroGlobal {...Datasfound?.hero} />}
      <div className={styles.containerItems}>
        {Datasfound &&
          Datasfound.jobs.length > 0 &&
          Datasfound.jobs.map((job, index) => (
            <div key={index}>
              <ItemJob {...job} />
            </div>
          ))}
      </div>
    </main>
  );
};

export default ContainerJobs;
