import { createRoot } from 'react-dom/client';
import { App } from './App';

import { restaurants } from '../mocks/restaurants';

const root = document.getElementById('root');

if (root) {
  const reactRoot = createRoot(root);

  reactRoot.render(<App restaurants={restaurants} />);
}
