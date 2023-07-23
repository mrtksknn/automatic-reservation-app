import React from 'react';
import { createRoot } from 'react-dom/client';
import ReduxProvider from './store'; // Redux Provider'ı import edin
import App from './App';

const root = createRoot(document.getElementById('root'));
root.render(
  <ReduxProvider>
    <App />
  </ReduxProvider>
);
