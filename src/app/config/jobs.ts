import imgComputerRobo from "../assets/images/computer02.jpg";
import { FaComputer } from "react-icons/fa6";
import { FaDatabase, FaSitemap } from "react-icons/fa";
import { RiComputerFill } from "react-icons/ri";
import { AiOutlineJavaScript } from "react-icons/ai";
import { GrCloudComputer } from "react-icons/gr";
import { FaGolang } from "react-icons/fa6";
import { GoRuby } from "react-icons/go";
import { SiAngular } from "react-icons/si";
import { ICategoryJob, IJobs, IJobsCategory } from "../interfaces/sites";

export const dataJobs: IJobs[] = [
  {
    title: "Cacaushow",
    description: "Diversas vagas acesse o link abaixo:",
    path: "https://cacaushow.gupy.io/",
  },
  {
    title: "Carrefour",
    description: "Diversas vagas acesse o link abaixo:",
    path: "https://grupocarrefourbrasil.pandape.infojobs.com.br/",
  },
  {
    title: "Bagaggio",
    description: "Diversas vagas acesse o link abaixo:",
    path: "https://bagaggio.gupy.io/",
  },
  {
    title: "Taco",
    description: "Diversas vagas acesse o link abaixo:",
    path: "https://taco.gupy.io/",
  },
  {
    title: "Cea",
    description: "Diversas vagas acesse o link abaixo:",
    path: "https://www.cea.com.br/trabalhe-conosco",
  },
  {
    title: "Rede D'Or",
    description: "Diversas vagas acesse o link abaixo:",
    path: "https://trabalheconosco.vagas.com.br/rededor",
  },
];

export const jobsByCategory: ICategoryJob[] = [
  {
    category: "tecnologia",
    jobs: [
      {
        icon: FaComputer,
        title: "Back End",
        description: "Informações completas no link abaixo:",
        path: "https://lnkd.in/dh2wdaUD",
      },
      {
        icon: FaDatabase,
        title: "Eng Dados",
        description: "Informações completas no link abaixo:",
        path: "https://lnkd.in/d-74DkET",
      },
      {
        icon: FaDatabase,
        title: "Eng Dados",
        description: "Informações completas no link abaixo:",
        path: "https://lnkd.in/dhwvksYz",
      },
      {
        icon: RiComputerFill,
        title: "Dev PHP",
        description: "Informações completas no link abaixo:",
        path: "https://lnkd.in/dHhbc7bg",
      },
      {
        icon: FaSitemap,
        title: "DevOps",
        description: "Informações completas no link abaixo:",
        path: "https://lnkd.in/dmWCcrzC",
      },
      {
        icon: AiOutlineJavaScript,
        title: "Dev Javascript",
        description: "Informações completas no link abaixo:",
        path: "https://lnkd.in/dYKZG9Uc",
      },
      {
        icon: FaComputer,
        title: "Dev Full",
        description: "Informações completas no link abaixo:",
        path: "https://lnkd.in/dzVgq-x3",
      },
      {
        icon: GrCloudComputer,
        title: "Dev Flutter",
        description: "Informações completas no link abaixo:",
        path: "https://lnkd.in/dWCHAABt",
      },
      {
        icon: GoRuby,
        title: "Ruby On Ralis",
        description: "Informações completas no link abaixo:",
        path: "https://lnkd.in/ebSUJFPC",
      },
      {
        icon: FaGolang,
        title: "Golang ",
        description: "Informações completas no link abaixo:",
        path: "https://lnkd.in/deZ9KBeW",
      },
      {
        icon: FaComputer,
        title: "Analista Comercial Jr/Pl",
        description: "Informações completas no link abaixo:",
        path: "https://lnkd.in/dvzUrFgh",
      },
      {
        icon: FaComputer,
        title: "Dev Full",
        description: "Informações completas no link abaixo:",
        path: "https://lnkd.in/dN3Fv5XS",
      },
      {
        icon: SiAngular,
        title: "Dev Angular",
        description: "Informações completas no link abaixo:",
        path: "https://lnkd.in/dbfpKexS",
      },
    ],
    hero: {
      image: {
        path: imgComputerRobo,
        description: "robo com muitos computadores",
      },
      title: {
        first: "Empregos na",
        second: "Area de Tecnologia",
      },
      paragraph: "Separamos diversas vagas na area de Tecnologia",
    },
  },
];
