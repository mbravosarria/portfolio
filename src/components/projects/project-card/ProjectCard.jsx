import Image from "next/image";
import styles from "./ProjectCard.module.css";
import { BiLinkExternal } from "react-icons/bi";

function ProjectCard({ name, image, description, tags, code, live }) {
  return (
    <div className={styles.container}>
      <div className={styles.image__container}>
        <Image
          src={image}
          alt="project image"
          width={1179}
          height={663}
          className={styles.image}
        />
      </div>
      <div className={styles.info__container}>
        <div className={styles.tags__container}>
          {tags.map((item, index) => (
            <p className={styles.tag} key={index}>
              #{item}
            </p>
          ))}
        </div>
        <h4 className={styles.name}>{name}</h4>
        <p className={styles.description}>{description}</p>
        <div className={styles.actions__container}>
          <a
            href={live}
            className={`${styles.demo} ${styles.action}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Demo
            <BiLinkExternal />
          </a>
          <a
            href={code}
            className={`${styles.code} ${styles.action}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Code
            <BiLinkExternal />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
