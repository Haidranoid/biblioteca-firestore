import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/bootstrap.min.css'
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import store from "./redux-firestore/store/store";
import {Provider} from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>
  , document.getElementById('root'));

serviceWorker.unregister();
