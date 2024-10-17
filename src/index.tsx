import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { rootStore, RootStoreContext } from './stores/RootStore';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RootStoreContext.Provider value={rootStore}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </RootStoreContext.Provider>
  </React.StrictMode>
);

reportWebVitals();
