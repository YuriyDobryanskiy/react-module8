import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

import { Provider } from 'react-redux';
import { persistor, store } from '../src/redux/store.js';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </HelmetProvider>
  </React.StrictMode>
);
