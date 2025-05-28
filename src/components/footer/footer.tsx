import type { FC } from 'react';
import { Container } from '../ui-kit/container/container';
import styles from './footer.module.css'

export const Footer: FC = () => <footer className={styles.footer}>
    <Container>
        &copy;2025
    </Container>
</footer>;
