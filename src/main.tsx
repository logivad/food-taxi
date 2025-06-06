import { createRoot } from 'react-dom/client';

import { App } from './components/app/app';
import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const root = document.getElementById('root');

if (root) {
  const reactRoot = createRoot(root);

  reactRoot.render(
    <StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </StrictMode>,
  );
}
