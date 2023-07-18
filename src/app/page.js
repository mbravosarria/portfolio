import Summary from "@/components/summary/Summary";
import styles from "./page.module.css";
import Skills from "@/components/skills/Skills";

export default function Home() {
  return (
    <main className={styles.main}>
      <Summary />
      <Skills />
    </main>
  );
}
