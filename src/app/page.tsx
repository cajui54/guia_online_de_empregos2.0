import Image from "next/image";
import styles from "./main.module.scss";
import Header from "./components/header";
import Hero from "./components/hero";
export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
    </main>
  );
}
