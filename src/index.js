import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import { Provider } from 'react-redux';
import store from './redux';

const root = ReactDOM.createRoot(document.getElementById('root'))
const element = <Provider store = {store }><App /></Provider>
root.render(element)
