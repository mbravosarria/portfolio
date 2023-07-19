import styles from "./ExperienceItem.module.css";
import { BiSend } from "react-icons/bi";

function ExperienceItem({ date, role, company, description }) {
  return (
    <div className={styles.container}>
      <p className={styles.date}>{date}</p>
      <h4 className={styles.role}>{role}</h4>
      <p className={styles.company}>{company}</p>
      <div className={styles.descriptions}>
        {description.map((item, index) => (
          <div className={styles.description__item} key={index}>
            <p>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExperienceItem;
