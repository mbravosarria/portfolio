import Summary from "@/components/summary/Summary";
import styles from "./page.module.css";
import Skills from "@/components/skills/Skills";
import Experiences from "@/components/experiences/Experiences";
import Projects from "@/components/projects/Projects";
import Certifications from "@/components/certifications/Certifications";

export default function Home() {
  return (
    <main className={styles.main}>
      <Summary />
      <Skills />
      <Experiences />
      <Projects />
      <Certifications />
    </main>
  );
}
