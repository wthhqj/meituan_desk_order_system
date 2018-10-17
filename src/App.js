import React, { Component } from 'react';
import './App.scss';

import { Switch, Route, withRouter } from 'react-router-dom';

import AppHome from './views/AppHome';
import AppConfirm from './views/AppConfirm';
import AppUserCenter from './views/AppUserCenter';
import AppOrders from './views/AppOrders';
import AppCamera from './views/AppCamera';

import axios from 'axios';

import { connect } from 'react-redux';


class App extends Component {

  componentWillMount() {
    setTimeout(() => {
      axios({
        url: '/menuData.json'
      }).then(res => {
        this.props.loadMenu(res.data);
      });
    }, 2000);
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" component={AppHome} exact ></Route>
          <Route path="/confirm" component={AppConfirm} ></Route>
          <Route path="/usercenter" component={AppUserCenter} ></Route>
          <Route path="/orders" component={AppOrders} ></Route>
          <Route path="/camera" component={AppCamera} ></Route>
          <Route path="*" component={AppHome} ></Route>
        </Switch>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    menu: []
  }
}

function mapDispatchToProps(dispatch) {

  let loadMenu = (menu) => {
    let action = {
      type: 'LOAD_MENU',
      payLoad: {
        menu: menu
      }
    }
    dispatch(action);
  }

  return {
    loadMenu: loadMenu
  }
}

let HOComponent = connect(mapStateToProps, mapDispatchToProps)(App);

// export default HOComponent;
export default withRouter(HOComponent);
// export default App;
