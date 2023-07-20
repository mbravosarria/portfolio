import styles from "./CertificationItem.module.css";
import Image from "next/image";
import { BiLinkExternal } from "react-icons/bi";

function CertificationItem({ name, company, date, image, link, content }) {
  return (
    <div className={styles.container}>
      <div className={styles.info__container}>
        <p className={styles.date}>{date}</p>
        <a
          href={link}
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h4 className={styles.role}>{name}</h4>
          <BiLinkExternal />
        </a>
        <p className={styles.company}>{company}</p>
        <div className={styles.contents}>
          {content.map((item, index) => (
            <div className={styles.description__item} key={index}>
              <p>#{item}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.image__container}>
        <Image
          className={styles.image}
          src={image}
          alt="image certification"
          width={759}
          height={588}
        />
      </div>
    </div>
  );
}

export default CertificationItem;
