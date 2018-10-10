import React, { Component } from 'react';
import './App.scss';

import { Switch, Route } from 'react-router-dom';

import AppHome from './views/AppHome';
import AppConfirm from './views/AppConfirm';
import AppUserCenter from './views/AppUserCenter';
import AppOrders from './views/AppOrders';

import { CartListContext } from './cartList-context.js'


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      cartList: []//此处是整个APP的购物车列表数组
    }

    this.addGoodToCart = this.addGoodToCart.bind(this);
  }

  addGoodToCart(good){
    let list = this.state.cartList;
    let flag = 0;
    let idx = 0;
    list.forEach((item, index) => {
      if(item.productID == good.productID){
        flag = 1;
        idx = index;
      }
    });

    if(flag){
      list[idx].quantity += 1
    }else{
      good.quantity = 1;
      list.push(good);
    }

    this.setState({
      cartList: list
    });
  }

  render() {
    return (
      <CartListContext.Provider value={{cartList: this.state.cartList, addGoodToCart: this.addGoodToCart}}>
        <div className="App">
          <Switch>
            <Route path="/" component={AppHome} exact></Route>
            <Route path="/confirm" component={AppConfirm}></Route>
            <Route path="/usercenter" component={AppUserCenter}></Route>
            <Route path="/orders" component={AppOrders}></Route>
            <Route path="*" component={AppHome}></Route>
          </Switch>
        </div>
      </CartListContext.Provider>
    );
  }
}

export default App;
