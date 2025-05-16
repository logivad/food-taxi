import { createRoot } from 'react-dom/client';
import { restaurants } from '../mocks/restaurants';

const root = document.getElementById('root');
if (root) {
  const reactRoot = createRoot(root);

  reactRoot.render(
    <>
      {restaurants.map((restaurant) => (
        <section key={restaurant.id}>
          <h2>{restaurant.name}</h2>
          <h3>Меню</h3>

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
          <hr />
        </section>
      ))}
    </>,
  );
}
