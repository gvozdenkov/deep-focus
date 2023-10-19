import './index.scss';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.tsx';

const container = document.getElementById('root');
const root = container && createRoot(container);

root &&
  root.render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
