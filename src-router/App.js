import React, { Component } from 'react';
import './App.scss';

import { Switch, Route } from 'react-router-dom';

class A extends Component {
  render() {
    return (
      <div>
        A
        {this.props.children}
      </div>
    );
  }
}
class B extends Component {
  render() {
    return (<div>B</div>);
  }
}
class C extends Component {
  render() {
    return (<div>C</div>);
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        APP
          <Route path="/A" component={A}>
            <Route path="/C" component={C}></Route>
            <Route path="/B" component={B}></Route>
          </Route>
      </div>
    );
  }
}

export default App;
