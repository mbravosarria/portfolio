import styles from "./Skills.module.css";
import { skills } from "@/data/data";
import SkillItem from "./skill-item/SkillItem";

function Skills() {
  return (
    <section className={styles.container}>
      <h3 className={styles.title}>Skills</h3>
      <div className={styles.skills__list}>
        {skills.map((item, index) => (
          <SkillItem key={index} name={item.name} percent={item.percent} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
