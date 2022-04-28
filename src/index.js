import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import $ from 'jquery';
import Popper from 'popper.js';
import reportWebVitals from './reportWebVitals';
// import App from './App';
// import Home from './container/Home/Home';
// import Product from './container/Product/Product';
import BlogPost from './container/BlogPost/BlogPost';

ReactDOM.render(
  <React.StrictMode>
    {/* <Home /> */}
    {/* <Product /> */}
    <BlogPost />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
