import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import "./index.css";
import registerServiceWorker from './registerServiceWorker';
import {createStore} from "redux";
import App from "./App";
import reducer from "./reducer";

ReactDOM.render( 
  <Provider store = {store}>
    <App />
  </Provider>, document.getElementById('root'));

  const store = createStore(reducer);

  store.dispatch(addComment("First comment"));
  store.dispatch(addComment("second comment"));

  registerServiceWorker();