import React from 'react';
import './index.scss';

import { withRouter } from 'react-router-dom';
import { Badge } from 'antd-mobile';

import { CartListContext } from '../../cartList-context';

import store from '../../store';

let cancelListener;

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalQuantity: 0,
      totalMoney: 0
    }

    this.gotoConfirm = this.gotoConfirm.bind(this);
    this.listener = this.listener.bind(this);
  }

  listener() {
    let menu = store.getState().menu;
    if (!menu) return;

    let totalQuantity = 0;
    let totalMoney = 0;
    menu.forEach(category => {
      category.goods.forEach(good => {
        if (good.quantity) {
          totalQuantity += good.quantity;
          totalMoney += good.quantity * good.smallPrice;
        }
      });
    });

    this.setState({
      totalQuantity,
      totalMoney
    });
  }

  componentWillMount() {
    cancelListener = store.subscribe(this.listener);
  }

  componentDidMount() {
    this.listener();
  }

  componentWillUnmount() {
    cancelListener();
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
            <Badge className="badge" text={this.state.totalQuantity} size="small" ></Badge>
            <i className="iconfont icon-shoppingcart-over"></i>
          </span>
          <div className="cart_info">
            <span className="desc">{this.state.totalQuantity ? `共${this.state.totalMoney}元` : '购物车是空的'}</span>
            <span className="to_pay" onClick={this.gotoConfirm}>选好了</span>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Cart);
