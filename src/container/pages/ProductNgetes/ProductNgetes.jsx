import React, { Component } from 'react'
import Footer from '../../../components/BlogPost/Footer';
import CardNgetes from './CardNgetes/CardNgetes';


class ProductNgetest extends Component {
  state = {
    counter: 10
  }

  parentCounterChangeHandler = (newValue) => {
    this.setState({
      counter: newValue
    });
  }

  render() {
    return (
      <>
        <div className='container'>
          <div className="row py-4 justify-content-center">
            <div className="col-md-6 col-lg-5">
              <div className="card">
                <div className="card-header bg-white">
                  <div className="flex">
                    <div className='row'>
                      <div className="col-md-6 position-relative">
                        <img className="img-fluid" src="https://www.pngitem.com/pimgs/m/369-3697938_surf-brand-logos-png-transparent-png.png" width={88} alt="logo" />
                      </div>
                      <div className="col-md-6 position-relative text-end">
                        <img className="img-fluid py-1" src="https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png" width={30} alt="troley" />
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                          {this.state.counter}
                          <span className="visually-hidden">unread messages</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Child Component yang akan mengirimkan value ke parent component nya */}
                <CardNgetes onCounterChange={(value) => this.parentCounterChangeHandler(value)} />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    )
  }
}

export default ProductNgetest;