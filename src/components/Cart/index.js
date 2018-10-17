import React from 'react';
import './index.scss';

import { withRouter } from 'react-router-dom';
import { Badge, Modal, List, Stepper, Toast, Icon } from 'antd-mobile';

import { connect } from 'react-redux';


class Cart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showCartList: false
    }

    this.gotoConfirm = this.gotoConfirm.bind(this);
    this.showCartList = this.showCartList.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  gotoConfirm() {
    this.props.history.replace('/confirm');
  }

  showCartList() {
    if (!this.props.cartList.length) {
      Toast.info('购物车里没东西', 1);
      return;
    }
    this.setState({ showCartList: true });
  }

  handleChange(good, newQuantity) {
    if (good.quantity < newQuantity) {
      this.props.increaseOne(good)
    }
    if (good.quantity > newQuantity) {
      this.props.reduceOne(good)
    }
  }

  render() {
    let { cartList, totalQuantity, totalMoney } = this.props;

    return (
      <div className="Cart">
        <div className="left" onClick={() => this.props.history.push('/confirm')}>+</div>
        {/* <div className="right">
          <span className="cart_icon" onClick={this.showCartList}>
            <Badge className="badge" text={totalQuantity} size="small" ></Badge>
            <i className="iconfont icon-shoppingcart-over"></i>
          </span>
          <div className="cart_info">
            <span className="desc">{totalQuantity ? `共${totalMoney}元` : '购物车是空的'}</span>
            {totalQuantity ? <span className="to_pay" onClick={this.gotoConfirm}>选好了</span> : null}
          </div>
        </div> */}

        {/* <Modal
          visible={this.state.showCartList}
          transparent
          onClose={() => this.setState({ showCartList: false })}
        >
          <div style={{ textAlign: 'left' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <h4 style={{ display: 'inline-block' }}>购物车</h4>
              <span onClick={this.props.removeAll}><Icon type="cross-circle" /></span>
            </div>
            <List>
              {cartList.map((good, index) => {
                return (
                  <List.Item key={index}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <div style={{ display: 'inline-block' }}>
                        {good.title}
                      </div>
                      <div style={{ display: 'inline-block' }}>
                        <Stepper
                          style={{ width: '100%', minWidth: '100px' }}
                          showNumber
                          size="small"
                          value={good.quantity}
                          onChange={this.handleChange.bind(this, good)}
                        />
                      </div>
                    </div>
                  </List.Item>
                );
              })}
            </List>
          </div>
        </Modal> */}
      </div>
    );
  }
}

function mapStateToProps(state) {
  let cartList = [];
  let totalQuantity = 0;
  let totalMoney = 0;

  state.menu.forEach(category => {
    category.goods.forEach(good => {
      if (good.quantity) {
        cartList.push(good);
        totalQuantity += good.quantity;
        totalMoney += good.quantity * good.smallPrice;
      }
    });
  });

  return {
    cartList,
    totalQuantity,
    totalMoney
  }
}

function mapDispatchToProps(dispatch) {

  let increaseOne = (good) => {
    let action = {
      type: 'INCREASE_ONE',
      payLoad: {
        good: good
      }
    };
    dispatch(action);
  }

  let reduceOne = (good) => {
    let action = {
      type: 'REDUCE_ONE',
      payLoad: {
        good: good
      }
    };
    dispatch(action);
  }

  let removeAll = () => {
    let action = {
      type: 'REMOVE_ALL',
      payLoad: {}
    }
    dispatch(action);
  }

  return {
    increaseOne,
    reduceOne,
    removeAll
  }
}

let HOComponent = connect(mapStateToProps, mapDispatchToProps)(Cart);


// let a = withRouter(HOComponent)
// console.log(a);

export default withRouter(Cart);
