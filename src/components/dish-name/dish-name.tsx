import { type FC } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';
import { selectDishById } from '../../redux/entities/dish/slice';

export const DishName: FC<{ dishId: string }> = ({ dishId }) => {
  const dish = useSelector((state: RootState) => selectDishById(state, dishId));

  return <span>{dish.name}</span>;
};
