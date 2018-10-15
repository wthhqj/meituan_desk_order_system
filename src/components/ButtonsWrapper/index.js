import React from 'react';
import './index.scss';

import { CartListContext } from '../../cartList-context.js'

class ButtonsWrapper extends React.Component {

  render() {
    return (
      <CartListContext.Consumer>
        {obj => {
          let good = this.props.good;
          let { increaseOne, reduceOne } = obj;
          return <div className="ButtonsWrapper">
            <span className="reduce" onClick={() => reduceOne(good)}>-</span>
            <span className="quantity">{this.props.good.quantity}</span>
            <span className="increase" onClick={() => increaseOne(good)}>+</span>
          </div>
        }}
      </CartListContext.Consumer>
    );
  }
}

export default ButtonsWrapper;
