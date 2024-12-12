import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import App from './App.tsx';
import { Provider } from 'react-redux';
import { store } from '@redux/store.ts';

const baseUrl = () =>
  import.meta.env.VITE_NODE_ENV === 'dev' ? '/' : '/weather-app/';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter basename={baseUrl()}>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
