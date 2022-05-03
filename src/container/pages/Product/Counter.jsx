import React, { Component } from "react";

class Counter extends Component {
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
      <>
        <button onClick={this.minusHandler} className="minus me-2 btn btn-primary"> - </button>
        <input className='form-control text-center' min={0} type="text" value={this.state.order} id="" />
        <button onClick={this.plusHandler} className="plus ms-2 btn btn-primary"> + </button>
      </>
    )
  }
}

export default Counter;