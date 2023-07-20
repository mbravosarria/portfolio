import Image from "next/image";
import styles from "./Summary.module.css";
import { HiMail, HiLocationMarker, HiPhone } from "react-icons/hi";

function Summary() {
  return (
    <section className={styles.container}>
      <div className={styles.img__container}>
        <Image
          alt="Profile image"
          src="/profile.jpeg"
          className={styles.image}
          width={800}
          height={800}
        />
      </div>
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.personal__data}>
            <h1 className={styles.name}>Michel Bravo</h1>
            <h2 className={styles.occupation}>
              Front-end developer | React | JavaScript | Node
            </h2>
          </div>
          <div className={styles.contact}>
            <div className={styles.contact__info}>
              <HiLocationMarker className={styles.icon} />
              <p>Lake Charles, LA 70605</p>
            </div>
            <div className={styles.contact__info}>
              <HiMail className={styles.icon} />
              <p>mbravosarria@gmail.com</p>
            </div>
            <div className={styles.contact__info}>
              <HiPhone className={styles.icon} />
              <p>+1 (337)-292-4674</p>
            </div>
          </div>
        </div>
        <p className={styles.summary}>
          Mid-level software engineer with a bachelor&apos;s in computer science
          and 4+ years of web development experience. In my last work
          experience, I participated as a remote front-end developer in
          developing e-commerce using the Next.js framework. Strong skills
          include front-end development. I am familiar with backend development
          in node environments. Proactively takes action to resolve issues and
          contribute to improving projects. I am encouraged to grow and develop
          my skills through challenging tasks.
        </p>
      </div>
    </section>
  );
}

export default Summary;
