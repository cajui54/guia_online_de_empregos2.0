import { StaticImageData } from "next/image";

export interface IJobByCategory {
  image: StaticImageData;
  title: string;
  paragraph: string;
  path: string;
}
