import { experiences } from "@/data/data";
import ExperienceItem from "./experience-item/ExperienceItem";
import styles from "./Experiences.module.css";

function Experiences() {
  return (
    <section className={styles.container}>
      <h3 className={styles.title}>Experiences</h3>
      <div className={styles.experiences__list}>
        {experiences.map((item, index) => (
          <ExperienceItem
            key={index}
            date={item.date}
            role={item.role}
            company={item.company}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
}

export default Experiences;
