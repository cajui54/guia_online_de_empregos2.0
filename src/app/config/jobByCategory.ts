import { IJobByCategory } from "../interfaces/job";
import imgTecnolgic from "../assets/images/computer02.jpg";
import imgDoctor from "../assets/images/doctor.jpg";

export const jobsByCategory: IJobByCategory[] = [
  {
    image: imgTecnolgic,
    title: "Tecnologia",

    paragraph:
      "Separamos diversas vagas de empregos nessa categoria, acesse o link abaixo:",
    path: "/pages/category/tecnologia",
  },
  {
    image: imgDoctor,
    title: "Enfermagem",

    paragraph:
      "Separamos diversas vagas de empregos nessa categoria, acesse o link abaixo:",
    path: "/pages/category/medicina",
  },
];
