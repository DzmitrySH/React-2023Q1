import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Store } from 'redux';
import { store } from './components/redux/store';
import App from './App';
import React from 'react';
import { Provider } from 'react-redux';

function entryClient(store: Store) {
  ReactDOM.hydrateRoot(
    document.getElementById('root') as Element,
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  );
}

entryClient(store);
