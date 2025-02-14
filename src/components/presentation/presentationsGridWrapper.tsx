import styles from './presentation.module.css';

export default function PresentationsGridWrapper({ children }: React.PropsWithChildren) {
  return <div className={styles.containerWrapper}>{children}</div>;
}
