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
      <div className="Cart">
        <div className="left">+</div>
        <div className="right">
          <span className="cart_icon">
            <Badge className="badge" text={3} size="small" ></Badge>
            <i className="iconfont icon-shoppingcart-over"></i>
          </span>
          <div className="cart_info">
            <span className="desc">购物车是空的</span>
            <span className="to_pay" onClick={this.gotoConfirm}>选好了</span>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Cart);
