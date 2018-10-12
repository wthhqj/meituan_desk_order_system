import React, { Component } from 'react';
import './App.scss';

import { Switch, Route } from 'react-router-dom';

import AppHome from './views/AppHome';
import AppConfirm from './views/AppConfirm';
import AppUserCenter from './views/AppUserCenter';
import AppOrders from './views/AppOrders';

import { CartListContext } from './cartList-context.js'


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" component={AppHome} exact></Route>
          <Route path="/confirm" component={AppConfirm}></Route>
          <Route path="/usercenter" component={AppUserCenter}></Route>
          <Route path="/orders" component={AppOrders}></Route>
          <Route path="*" component={AppHome}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
