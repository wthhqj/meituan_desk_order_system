import React from 'react';
import './index.scss';


import { Link } from 'react-router-dom';
import { Button, NavBar, Icon, Card } from 'antd-mobile';

import { CartListContext } from '../../cartList-context';

let Avatar = () => {
  return <div>
    <img style={{ width: "30px", height: "30px" }} src="/avatar.jpg"></img>
  </div>
}

let Total = ({ cartList }) => {
  let total = 0;
  let totalQuantity = 0;
  cartList.forEach( good => {
    total += good.quantity * good.smallPrice;
    totalQuantity += good.quantity;
  });

  return <div className="total_bar">
    <span>共{totalQuantity}份</span>
    <span className="center"> 小计 </span>
    <span className="price">¥{total}</span>
  </div>
}

class AppConfirm extends React.Component {

  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
  }

  goBack() {
    this.props.history.go(-1);
  }

  render() {
    return (
      <div className="AppConfirm">
        <NavBar mode="light" icon={<Icon type="left" />} onLeftClick={this.goBack}>提交订单</NavBar>
        <div className="main">
          <CartListContext.Consumer>
            {obj => {
              let cartList = obj.cartList;
              return (
                <Card>
                  <Card.Header title="周阳" thumb={<Avatar />} />
                  <Card.Body>
                    <ul className="cart_list">
                      {cartList.map((good, index) =>
                        <li key={index}>
                          <span>{good.title}</span>
                          <div>
                            <span>x{good.quantity}</span>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                          <span>¥{good.quantity * good.smallPrice}</span>
                          </div>
                        </li>
                      )}
                    </ul>
                  </Card.Body>
                  <Card.Footer extra={<Total cartList={cartList} />} />

                </Card>)
            }}
          </CartListContext.Consumer>
        </div>
        <Button style={{ background: '#ff6700', color: 'white' }}>下单并支付15元</Button>
        <div className="two_button">
          <div>
            <Link to="/">点餐</Link>
          </div>
          <div>呼叫</div>
        </div>
      </div>
    );
  }
}

export default AppConfirm;
