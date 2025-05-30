import { createRoot, type Root } from 'react-dom/client';

import { App } from './components/app/app';
import { StrictMode } from 'react';

declare global {
  interface Window {
    reactRoot: Root;
  }
}

const root = document.getElementById('root');

if (root) {
  const reactRoot = createRoot(root);
  window.reactRoot = reactRoot;

  reactRoot.render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}
