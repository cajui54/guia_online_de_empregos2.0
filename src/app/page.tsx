import Header from "./components/header";
import Hero from "./components/hero";
import SectionSites from "./components/section_sites";
import SectionJobs from "./components/section_jobs";
import SectionArticle from "./components/section_article";
import SectionInformation from "./components/section_information";
import Footer from "./components/footer";
import Contact from "./components/contact";
import Paralax from "./paralax";
import JobsByCategory from "./components/jobs_by_category";
export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Paralax />
      <SectionSites />
      <SectionJobs />
      <JobsByCategory />
      <SectionArticle />
      <SectionInformation />
      <Contact />
      <Footer />
    </main>
  );
}
