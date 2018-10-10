import React from 'react';
import './index.scss';

import { withRouter } from 'react-router-dom';
import { Badge } from 'antd-mobile';

import { CartListContext } from '../../cartList-context';

class Cart extends React.Component {

  constructor(props) {
    super(props);

    this.gotoConfirm = this.gotoConfirm.bind(this);
  }

  gotoConfirm() {
    this.props.history.push('/confirm');
  }

  render() {
    return (
      <CartListContext.Consumer>
        {obj => {
          let cartList = obj.cartList;

          let totalMoney = 0;
          let totalQuantity = 0;
          cartList.forEach(good => {
            totalMoney += good.smallPrice * good.quantity;
            totalQuantity += good.quantity;
          });

          return (
          <div className="Cart">
            <div className="left">+</div>
            <div className="right">
              <span className="cart_icon">
                <Badge className="badge" text={totalQuantity} size="small" ></Badge>
                <i className="iconfont icon-shoppingcart-over"></i>
              </span>
              <div className="cart_info">
                <span className="desc">{cartList.length ? '共' + totalMoney + '元' : '购物车是空的'}</span>
                {cartList.length ? <span className="to_pay" onClick={this.gotoConfirm}>选好了</span> : null}
              </div>
            </div>
          </div>)
        }}
      </CartListContext.Consumer>
    );
  }
}

export default withRouter(Cart);
