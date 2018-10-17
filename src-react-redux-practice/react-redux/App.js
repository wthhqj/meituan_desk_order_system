import React, { Component } from 'react';
import './App.scss';

import { connect } from 'react-redux';

// this is UI component
class Counter extends Component {

  render() {
    let { quantity, increase } = this.props;
    return (
      <div className="Counter">
        <div>{quantity}</div>
        <button onClick={() => {
          increase();
        }}>click me!</button>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    quantity: state.value
  }
}

function mapDispatchToProps(dispatch){
  let action = {
    type: 'increase',
    payLoad: {
      value: 2
    }
  }

  return {
    increase: () => dispatch(action)
  }
}

let App = connect(mapStateToProps, mapDispatchToProps)(Counter);

export default App;
