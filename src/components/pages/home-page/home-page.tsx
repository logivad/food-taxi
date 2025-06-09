import { type FC } from 'react';
import { Container } from '../../ui-kit/container/container';
import { Link } from 'react-router';

export const HomePage: FC = () => {
  return (
    <Container>
      <p>Добро пожаловать!</p>
      <p>
        Чтобы покушать,{' '}
        <Link to="restaurants">перейдите к выбору ресторана</Link>
      </p>
    </Container>
  );
};
