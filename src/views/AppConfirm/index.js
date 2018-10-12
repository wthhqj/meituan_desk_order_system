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
  cartList.forEach(good => {
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

  toPay() {
    console.log('生成订单数据，并发送到服务器');
  }

  render() {
    return (
      <div className="AppConfirm">
        <NavBar mode="light" icon={<Icon type="left" />} onLeftClick={this.goBack}>提交订单</NavBar>
        <div className="main">

          <Card>
            <Card.Header title="周阳" thumb={<Avatar />} />
            <Card.Body>
              <ul className="cart_list">
                <li>
                  <span>123</span>
                  <div>
                    <span>x3</span>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                          <span>¥20</span>
                  </div>
                </li>
              </ul>
            </Card.Body>
            {/* <Card.Footer extra={<Total cartList={cartList} />} /> */}
          </Card>

        </div>
        <Button style={{ background: '#ff6700', color: 'white' }} onClick={this.toPay}>下单并支付15元</Button>
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
