import styles from './addIdeaSection.module.css';

export default function AddIdeaSection() {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h2>Add Your Idea to the Agenda!</h2>
        <p>Join other thought leaders and showcase your expertise. We’re excited to hear from you!</p>
        <button>Submit your presentation</button>
      </div>
      <div className={styles.image}>
        <img src="/image_1.png" width="350px" />
      </div>
    </div>
  );
}
