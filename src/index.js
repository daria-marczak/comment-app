import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import "./index.css";
import registerServiceWorker from './registerServiceWorker';
import {createStore, combineReducers} from "redux";
import DevTools from "./DevTools";
import App from "./App";
import reducer from "./reducer";
import {addComment} from "./actions";

const store = createStore(reducer, DevTools.instrument());

ReactDOM.render( 
  <Provider store = {store}>
    <App />
  </Provider>, document.getElementById('root'));

store.dispatch(addComment("First comment"));
store.dispatch(addComment("Second comment"));

registerServiceWorker();