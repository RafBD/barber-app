import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css';



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Auth0Provider
    domain = "dev-obinb706lll8exre.us.auth0.com"
    clientId = "WdZgXaSsSJzWBga9LYb7330tMDiKYoW4"
    authorizationParams={{redirect_uri: window.location.origin}}>
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
reportWebVitals();