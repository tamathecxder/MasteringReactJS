import React, { Component } from 'react';

class LifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    }
  }

  componentDerivedStateFromProps(prevProps, prevState) {
    console.log('componentDerivedStateFromProps');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentSnapshotBeforeUpdate(nextProps, nextState) {
    console.log('componentSnapshotBeforeUpdate');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render() {
    return (
      <div>
        <div style={{ padding: "10px" }}>
          <strong>LifeCycle Component / Siklus Hidup</strong>
          <hr />
          <button className='btn btn-success'>Button Component: {this.state.count}</button>
        </div>
      </div>
    )
  }
}

export default LifeCycle;