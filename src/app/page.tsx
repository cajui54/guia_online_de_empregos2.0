import Header from "./components/header";
import Hero from "./components/hero";
import SectionSites from "./components/section_sites";
import SectionJobs from "./components/section_jobs";
import SectionArticle from "./components/section_article";
import SectionInformation from "./components/section_information";
export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <SectionSites />
      <SectionJobs />
      <SectionArticle />
      <SectionInformation />
    </main>
  );
}
