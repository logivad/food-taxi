import { type FC, type PropsWithChildren } from 'react';
import styles from './button.module.scss';

interface Props extends PropsWithChildren {
  type?: HTMLButtonElement['type'];
  onClick?: (e: React.MouseEvent) => void;
}

export const Button: FC<Props> = ({ children, onClick, type = 'button' }) => {
  return (
    <button className={styles.button} type={type} onClick={onClick}>
      {children}
    </button>
  );
};
