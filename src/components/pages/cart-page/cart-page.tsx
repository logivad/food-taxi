import { useSelector } from 'react-redux';
import { selectCartItems } from '../../../redux/entities/cart/slice';
import { Container } from '../../ui-kit/container/container';
import { Link } from 'react-router';
import { Dish } from '../../restaurant/dish';

export const Cart = () => {
  const items = useSelector(selectCartItems);

  if (!items.length) {
    return (
      <Container>
        <p>Корзина пуста, как и ваш животик :(</p>
        <p>
          Чтобы покушать,{' '}
          <Link to="/restaurants">перейдите к выбору ресторана</Link>
        </p>
      </Container>
    );
  }

  return (
    <Container>
      <p>Ваш заказ:</p>
      <ul>
        {items.map(({ id }) => (
          <li key={id}>
            <Dish id={id} />
          </li>
        ))}
      </ul>
    </Container>
  );
};
