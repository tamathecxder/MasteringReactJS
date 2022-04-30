import React, { Component } from 'react';

class Card extends Component {
  state = {
    order: 4
  }

  orderChangeHandler = (newValue) => {
    this.props.onOrderChange(newValue);
  }

  plusHandler = () => {
    this.setState({
      order: this.state.order + 1
    }, () => {
      this.orderChangeHandler(this.state.order);
    })
  }

  minusHandler = () => {
    if ( this.state.order > 0 ) {
      this.setState ({ 
        order: this.state.order - 1
      }, () => {
        this.orderChangeHandler(this.state.order);
      })
    }
  }

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
              <button onClick={this.minusHandler} className="minus me-2 btn btn-primary"> - </button>
              <input className='form-control text-center' min={0} type="text" value={this.state.order} id="" />
              <button onClick={this.plusHandler} className="plus ms-2 btn btn-primary"> + </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Card;