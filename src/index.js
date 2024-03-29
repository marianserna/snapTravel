import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';

import './elements/reset.css';
import './elements/styles.css';

import store from './store';

const Root = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(Root, document.getElementById('root'));
registerServiceWorker();
