import { StaticImageData } from "next/image";

export interface IHeroGlobal {
  image: {
    path: StaticImageData;
    description: string;
  };
  title: {
    first: string;
    second: string;
  };
  paragraph: string;
}
