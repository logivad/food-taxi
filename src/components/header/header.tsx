import type { FC } from 'react';
import styles from './header.module.css'
import { Container } from '../ui-kit/container/container';

export const Header: FC = () => <header className={styles.header}>
    <Container>
        Food taxi. Доставка для голодных животиков
    </Container>
</header>;
