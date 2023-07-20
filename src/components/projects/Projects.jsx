import { projects } from "@/data/data";
import ProjectCard from "./project-card/ProjectCard";
import styles from "./Projects.module.css";

function Projects() {
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h3 className={styles.title}>Projects ({projects.length})</h3>
      </div>
      <div className={styles.projects__list}>
        {projects.map((item, index) => (
          <ProjectCard
            name={item.name}
            image={item.image}
            tags={item.tags}
            description={item.description}
            live={item.live}
            code={item.code}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
