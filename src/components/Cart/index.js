import React from 'react';
import './index.scss';

import { withRouter } from 'react-router-dom';
import { Badge, Modal, List, Stepper, Toast, Icon } from 'antd-mobile';

import { CartListContext } from '../../cartList-context';

import store from '../../store';

let cancelListener;

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCartList: false,
      cartList: [],
      totalQuantity: 0,
      totalMoney: 0
    }

    this.gotoConfirm = this.gotoConfirm.bind(this);
    this.listener = this.listener.bind(this);
    this.showCartList = this.showCartList.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  listener() {
    let menu = store.getState().menu;
    if (!menu) return;

    let cartList = [];
    let totalQuantity = 0;
    let totalMoney = 0;
    menu.forEach(category => {
      category.goods.forEach(good => {
        if (good.quantity) {
          cartList.push(good);
          totalQuantity += good.quantity;
          totalMoney += good.quantity * good.smallPrice;
        }
      });
    });

    this.setState({
      cartList: cartList,
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

  showCartList() {
    if(!this.state.cartList.length) {
      Toast.info('购物车里没东西', 1);
      return;
    }
    this.setState({ showCartList: true });
  }

  handleChange(good, newQuantity){
    if(good.quantity < newQuantity){
      console.log('increase')
      let action = {
        type: 'INCREASE_ONE',
        payLoad: {
          good: good
        }
      }
      store.dispatch(action);
    }
    if(good.quantity > newQuantity){
      console.log('reduce')
      let action = {
        type: 'REDUCE_ONE',
        payLoad: {
          good: good
        }
      }
      store.dispatch(action);
    }
  }

  removeAll(){
    let action = {
      type: 'REMOVE_ALL',
      payLoad: {}
    }
    store.dispatch(action);
  }

  render() {
    return (
      <div className="Cart">
        <div className="left">+</div>
        <div className="right">
          <span className="cart_icon" onClick={this.showCartList}>
            <Badge className="badge" text={this.state.totalQuantity} size="small" ></Badge>
            <i className="iconfont icon-shoppingcart-over"></i>
          </span>
          <div className="cart_info">
            <span className="desc">{this.state.totalQuantity ? `共${this.state.totalMoney}元` : '购物车是空的'}</span>
            {this.state.totalQuantity ? <span className="to_pay" onClick={this.gotoConfirm}>选好了</span> : null}
          </div>
        </div>

        <Modal
          visible={this.state.showCartList}
          transparent
          onClose={() => this.setState({ showCartList: false })}
        >
          <div style={{ textAlign: 'left' }}>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <h4 style={{display: 'inline-block'}}>购物车</h4>
              <span onClick={this.removeAll.bind(this)}><Icon type="cross-circle" /></span>
            </div>
            <List>
              {this.state.cartList.map((good, index) => {
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
        </Modal>
      </div>
    );
  }
}

export default withRouter(Cart);
