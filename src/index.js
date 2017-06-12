import React from 'react';
import ReactDOM from 'react-dom';
import Main from './root/Main.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap-social/bootstrap-social.css'
import '../node_modules/highlight.js/styles/monokai-sublime.css'
import './index.css';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'

const store = createStore(reducers);
window.store = store;

window.showStore = () => {
  console.log(store.getState())
};

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('root')
);