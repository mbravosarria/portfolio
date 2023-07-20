import styles from "./Certifications.module.css";
import { certifications } from "@/data/data";
import CertificationItem from "./certification-item/CertificationItem";

function Certifications() {
  return (
    <section className={styles.container}>
      <h3 className={styles.title}>Certifications</h3>
      <div className={styles.experiences__list}>
        {certifications.map((item, index) => (
          <CertificationItem
            key={index}
            name={item.name}
            date={item.date}
            image={item.image}
            link={item.link}
            company={item.company}
            content={item.content}
          />
        ))}
      </div>
    </section>
  );
}

export default Certifications;
