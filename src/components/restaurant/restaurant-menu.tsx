import type { FC } from 'react';
import type { Menu } from '../../model/restaurant';
import { Dish } from './dish';

export const RestaurantMenu: FC<{ menu: Array<Menu> }> = ({ menu }) => {
  return (
    <div>
      <h3>Меню</h3>
      <ol>
        {menu.map(({ id, name }) => (
          <li key={id}>
            <Dish title={name} />
          </li>
        ))}
      </ol>
    </div>
  );
};
