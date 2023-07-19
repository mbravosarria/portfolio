import Summary from "@/components/summary/Summary";
import styles from "./page.module.css";
import Skills from "@/components/skills/Skills";
import Experiences from "@/components/experiences/Experiences";

export default function Home() {
  return (
    <main className={styles.main}>
      <Summary />
      <Skills />
      <Experiences />
    </main>
  );
}
