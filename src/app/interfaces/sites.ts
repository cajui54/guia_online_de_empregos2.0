import { StaticImageData } from "next/image";
import { IconType } from "react-icons";

export interface ISites {
  name: string;
  site: string;
  path: string;
}

export interface IJobs {
  title: string;
  description: string;
  path: string;
}
export interface IJobsCategory {
  icon: IconType;
  title: string;
  description: string;
  path: string;
}
export interface ICategoryJob {
  category: string;
  jobs: IJobsCategory[];
  hero: {
    image: {
      path: StaticImageData;
      description: string;
    };
    title: {
      first: string;
      second: string;
    };
    paragraph: string;
  };
}
