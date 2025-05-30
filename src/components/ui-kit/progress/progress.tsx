import { type FC } from 'react';
import { useProgress } from './use-progress';
import styles from './progress.module.css';

export const Progress: FC = () => {
  const progress = useProgress();

  return <div className={styles.progress} style={{ width: progress }}></div>;
};
