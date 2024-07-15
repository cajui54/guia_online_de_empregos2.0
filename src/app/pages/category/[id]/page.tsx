import HeaderGlobal from "@/app/components/headerGlobal";
import HeroGlobal from "@/app/components/heroGlobal";
import { jobsByCategory } from "@/app/config/jobs";
import styles from "./styles.module.scss";
import React from "react";
import ItemJob from "../item";
import { Metadata } from "next";
import { ICategoryJob } from "@/app/interfaces/sites";
import NotFound from "@/app/not-found";
export let metadata: Metadata;

interface IPropsParam {
  params: { id: string };
}
const loadMetadata = (datas: ICategoryJob | undefined) => {
  if (datas) {
    return {
      title: `${datas.titlePage} - Guia Online de Empregos`,
      description:
        "O Guia Online de empregos separou diversas vagas de empregos para você se cadastrar",
      keywords: `empregos, vagas, estágio, ${datas.category}, Guia Online de Empregos`,
    };
  }
  return {
    title: `Guia Online de Empregos - Categoria`,
    description:
      "O Guia Online de empregos separou diversas vagas de empregos para você se cadastrar",
    keywords:
      "empregos, vagas, estágio, tecnologia, saúde, Guia Online de Empregos, back end, front-end, devops",
  };
};
const ContainerJobs = async ({ params }: IPropsParam) => {
  const Datasfound = jobsByCategory.find((job) => job.category === params.id);
  if (!Datasfound) return <NotFound />;
  metadata = { ...loadMetadata(Datasfound) };
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
