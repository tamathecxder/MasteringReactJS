import React, { Component } from 'react';

class Product extends Component {
  state = {
    order: 4
  }

  plusHandler = () => {
    this.setState({
      order: this.state.order + 1
    })
  }

  minusHandler = () => {
    if (this.state.order > 0 ) {
      this.setState ({
        order: this.state.order - 1
      })
    }
  } 

  render() {
    return (
      <div className='container'>
        <div className="row py-4 justify-content-center">
          <div className="col-md-5">
            <div className="card">
              <div className="card-header bg-white">
                <div className="flex">
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
                </div>
              </div>
              <div className="card-body">
                <div className='brand-image mb-4'>
                  <img src="https://pict-c.sindonews.net/dyn/620/pena/news/2021/04/28/123/411468/rog-zephyrus-duo-15-se-laptop-gaming-dua-layar-paling-bertenaga-ksg.jpg" className='img-thumbnail' alt="product_image" />
                </div>
                <p className="fw-bold card-title">Laptop Gaming Asus ROG Zephyrus NVIDIA 3050Ti</p>
                <p>Rp 15.000.000</p>
                <div className='counter py-3'>
                  <div className="row justify-content-center">
                    <div className="col-md-6 d-flex">
                      <button onClick={this.minusHandler} className="minus me-2 btn btn-primary"> - </button>
                      <input className='form-control text-center' min={0} type="text" value={this.state.order} id="" />
                      <button onClick={this.plusHandler} className="plus ms-2 btn btn-primary"> + </button>
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