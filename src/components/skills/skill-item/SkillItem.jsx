import styles from "./SkillItem.module.css";

function SkillItem({ name, percent }) {
  return (
    <div className={styles.container}>
      <p className={styles.title}>{name}</p>
      <div className={styles.bar}>
        <div className={styles.percent__bar} style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}

export default SkillItem;
