import styles from './presentation.module.css';

export default function PresentationsWrapper({ children }: React.PropsWithChildren) {
  return <div className={styles.containerWrapper}>{children}</div>;
}
