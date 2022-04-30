// Libraries
import React, { Component } from 'react';
import LifeCycle from '../LifeCycle/LifeCycleComponent';

// Pages
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BlogPost from '../BlogPost/BlogPost';
import Product from '../Product/Product';
import YtCard from '../YtCard/YtCard';
import Header from '../../../components/BlogPost/Header';

class Home extends Component {
  state = {
    showComponent: true
  }
  
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<BlogPost />} />
          <Route path='/product' element={<Product />} />
          <Route path='/lifecycle' element={<LifeCycle />} />
          <Route path='/youtube-card' element={<YtCard />} />
        </Routes>
      </BrowserRouter>
    )
  }
}

export default Home;
