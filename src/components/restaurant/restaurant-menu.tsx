import type { FC } from 'react';
import { Dish } from './dish';

export const RestaurantMenu: FC<{ menuIds: Array<string> }> = ({ menuIds }) => {
  return (
    <div>
      <h3>Меню</h3>
      <ol>
        {menuIds.map((id) => (
          <li key={id}>
            <Dish id={id} />
          </li>
        ))}
      </ol>
    </div>
  );
};
