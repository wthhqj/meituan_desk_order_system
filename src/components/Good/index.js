import React from 'react';
import './index.scss';

import { Button } from 'antd-mobile';

import { CartListContext, cartList } from '../../cartList-context'

class Good extends React.Component {

  render() {
    let good = this.props.good;

    return (
      <CartListContext.Consumer>
        {obj => {
          let { addGoodToCart } = obj

          return (
            <div className="Good">
              <div className="thumb_img">
                <img src="/tangfan.jpg"></img>
              </div>
              <div className="desc">
                <h4>{good.title}</h4>
                <div className="choice_bar">
                  <span className="price">¥{good.smallPrice}</span>
                  <Button size="small" style={{ color: '#ff6700' }} onClick={() => { addGoodToCart(good) }}>选择</Button>
                </div>
              </div>
            </div>)
        }}
      </CartListContext.Consumer>
    )
  }
}

export default Good;
