import React, { Component } from 'react';
import Counter from '../Counter';

class Card extends Component {
  render() {
    return (
      <div className="card-body">
        <div className='brand-image mb-4'>
          <img src="https://pict-c.sindonews.net/dyn/620/pena/news/2021/04/28/123/411468/rog-zephyrus-duo-15-se-laptop-gaming-dua-layar-paling-bertenaga-ksg.jpg" className='img-thumbnail' alt="product_image" />
        </div>
        <p className="fw-bold card-title">Laptop Gaming Asus ROG Zephyrus NVIDIA 3050Ti</p>
        <p>Rp 15.000.000</p>
        <div className='counter py-3'>
          <div className="row justify-content-center">
            <div className="col-md-6 d-flex">
              <Counter onOrderChange={(value) => this.props.onOrderChange(value)} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Card;