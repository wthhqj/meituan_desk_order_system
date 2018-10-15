import React, { Component } from 'react';
import './App.scss';

import { Switch, Route } from 'react-router-dom';

import AppHome from './views/AppHome';
import AppConfirm from './views/AppConfirm';
import AppUserCenter from './views/AppUserCenter';
import AppOrders from './views/AppOrders';
import AppCamera from './views/AppCamera';

import axios from 'axios';


import { CartListContext } from './cartList-context.js'

import store from './store';


class App extends Component {

  componentWillMount() {
    setTimeout(() => {
      axios({
        url: '/menuData.json'
      }).then(res => {
        let action = {
          type: 'LOAD_MENU',
          payLoad: {
            menu: res.data
          }
        }
        store.dispatch(action);
      });
    }, 2000);
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" component={AppHome} exact></Route>
          <Route path="/confirm" component={AppConfirm}></Route>
          <Route path="/usercenter" component={AppUserCenter}></Route>
          <Route path="/orders" component={AppOrders}></Route>
          <Route path="/camera" component={AppCamera}></Route>
          <Route path="*" component={AppHome}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
