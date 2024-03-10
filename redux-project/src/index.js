import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bulma/css/bulma.css';
import { store } from './store/store';
import { Provider } from 'react-redux';

// store'u provider olarak geçmemiz için store ve Provider'ı import etmemiz gerekir.
// daha sonra App.js'i Provider ile sarmalayıp props olarak store'u geçmemiz gerekir.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();
