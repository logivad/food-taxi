import { type FC } from 'react';
import { useParams } from 'react-router';
import { Dish } from '../../restaurant/dish';
import { Container } from '../../ui-kit/container/container';

export const DishPage: FC = () => {
  const { dishId } = useParams();

  return <Container>{dishId && <Dish id={dishId} />}</Container>;
};
