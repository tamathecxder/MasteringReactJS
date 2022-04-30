import React, { Component } from 'react';
import Footer from '../../../components/BlogPost/Footer';

class LifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    }
    console.log('constructor');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps');
    return null;
  }

  componentDidMount() {
    console.log('componentDidMount');
    // setTimeout(() => {
    //   this.setState({
    //     count: 2,
    //   })
    // }, 3000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.group('shouldComponentUpdate');
    console.log('nextProps : ',nextProps);
    console.log('nextState : ',nextState);
    console.log('This state : ', this.state);
    console.groupEnd('shouldComponentUpdate');

    if ( nextState.count >= 4 ) {
      return false;
    }

    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate');
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  changeCount = () => {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    console.log('render');
    return (
      <>
        <div className='container'>
          <div className="row my-3 justify-content-center">
            <div className="col-md-4">
              <div className="card">
                <div className="card-header bg-white">
                  <h4 className='card-title'>Lifecycle Component In React JS</h4>
                </div>
                <div className="card-body bg-white">
                  <button onClick={this.changeCount} className='btn btn-success'>Button Component</button>
                  <span className='badge p-3 bg-dark ms-2 rounded-circle'>{this.state.count}</span>
                </div>
                <div className="card-footer bg-white"></div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    )
  }
}

export default LifeCycle;