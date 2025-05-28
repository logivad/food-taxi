import type { FC, PropsWithChildren } from "react";
import styles from './container.module.css'

export const Container: FC<PropsWithChildren> = ({children}) => <div className={styles.container}>
    {children}
</div>