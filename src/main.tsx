import { createRoot } from 'react-dom/client';
import { restaurants } from '../mocks/restaurants';
import { Fragment } from 'react/jsx-runtime';

const root = document.getElementById('root');
if (root) {
  const reactRoot = createRoot(root);

  reactRoot.render(
    <>
      {restaurants.map((restaurant) => (
        <Fragment key={restaurant.id}>
          <h1>{restaurant.name}</h1>
          <h2>Меню</h2>

          <ul>
            {restaurant.menu.map((menuItem) => (
              <li key={menuItem.id}>{menuItem.name}</li>
            ))}
          </ul>

          <h3>Отзывы</h3>
          <ul>
            {restaurant.reviews.map((review) => (
              <li key={review.id}>{review.text}</li>
            ))}
          </ul>
        </Fragment>
      ))}
    </>,
  );
}
