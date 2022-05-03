import React, { Component } from 'react'
import Footer from '../../../../components/BlogPost/Footer';

class CardNgetes extends Component {
  state = {
    counter: 10
  }

  counterChangeHandler = (newValue) => {
    this.props.onCounterChange(newValue);
  }

  plusHandler = () => {
    this.setState({
      counter: this.state.counter + 1
    }, () => {
      this.counterChangeHandler(this.state.counter);
    });

  }

  minusHandler = () => {
    if (this.state.counter > 0) {
      this.setState({
        counter: this.state.counter - 1
      }, () => {
        this.counterChangeHandler(this.state.counter);
      });
    }

  }
  
  render() {
    return (
      <>
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
                <input className='form-control text-center' min={0} type="text" value={this.state.counter} id="" />
                <button onClick={this.plusHandler} className="plus ms-2 btn btn-primary"> + </button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    )
  }
}

export default CardNgetes;