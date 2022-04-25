import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import Home from './container/Home/Home';
import Product from './container/Product/Product';
import LifeCycle from './container/LifeCycle/LifeCycleComponent';

ReactDOM.render(
  <React.StrictMode>
    {/* <Home /> */}
    {/* <Product /> */}
    <LifeCycle />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
