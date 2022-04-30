import React, { Component } from 'react';
import YoutubeComponent from '../../components/Youtube/YoutubeComponent';
import LifeCycle from '../LifeCycle/LifeCycleComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BlogPost from '../BlogPost/BlogPost';
import Product from '../Product/Product';
import Header from '../../components/BlogPost/Header';
import YtCard from '../YtCard/YtCard';

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
