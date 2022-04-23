import React, { Component } from 'react';

class Product extends Component {
  state = {
    order: 4
  }
  render() {
    return (
      <div className='container'>
        <div className="row py-4 justify-content-center">
          <div className="col-md-5">
            <div className="card">
              <div className="card-header bg-white">
                <d className="flex">
                  <div className='row'>
                    <div className="col-md-6 justify-content-start text-start">
                      <img src="https://www.pngitem.com/pimgs/m/369-3697938_surf-brand-logos-png-transparent-png.png" width={88} alt="logo" />
                    </div>
                    <div className="col-md-6 justify-content-end text-end position-relative">
                      <img src="https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png" className='py-1' width={30} alt="troley" />
                      <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {this.state.order}
                        <span class="visually-hidden">unread messages</span>
                      </span>
                    </div>
                  </div>
                </d>
                <div className='brand-image'>
                  <img src="https://pict-c.sindonews.net/dyn/620/pena/news/2021/04/28/123/411468/rog-zephyrus-duo-15-se-laptop-gaming-dua-layar-paling-bertenaga-ksg.jpg" className='img-thumbnail' alt="product_image" />
                </div>
              </div>
              <div className="card-body">
                <p className="fw-bold card-title">Laptop Gaming Asus ROG Zephyrus NVIDIA 3050Ti</p>
                <p>Rp 15.000.000</p>
                <div className='counter'>
                  <div className="row justify-content-center">
                    <div className="col-md-6 d-flex">
                      <button className="minus me-2 btn btn-primary"> - </button>
                      <input className='form-control text-center' type="text" value={3} id="" />
                      <button className="plus ms-2 btn btn-primary"> + </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Product;