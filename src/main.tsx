import { createRoot } from 'react-dom/client';

import { App } from './components/app/app';
import { StrictMode } from 'react';
const root = document.getElementById('root');

if (root) {
  const reactRoot = createRoot(root);

  reactRoot.render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}
