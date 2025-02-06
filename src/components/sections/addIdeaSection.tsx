import styles from './sections.module.css';

export default function AddIdeaSection() {
  return (
    <div className={styles.flexContainer}>
      <div className={styles.text}>
        <h1>Add Your Idea to the Agenda!</h1>
        <p>Join other thought leaders and showcase your expertise. We’re excited to hear from you!</p>
        <button className={`${styles.primaryBtn} ${styles.btn}`}>Submit your presentation</button>
      </div>
      <div className={styles.image}>
        <img src="/image_1.png" width="350px" />
      </div>
    </div>
  );
}
