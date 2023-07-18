import Summary from "@/components/summary/Summary";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Summary />
    </main>
  );
}
