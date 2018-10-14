import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';

let reducer = (previousState = 0, action) => {
  let newState = ++previousState;
  return newState;
}

const store = createStore(reducer);

class A extends React.Component {

  render(){
    return (
      <div>{this.props.value}</div>
    );
  }
}

class Counter extends React.Component {

  render(){
    return (
      <div>
        <A value={store.getState()}></A>
        <button onClick={() => {
          store.dispatch({type: 'INCREASE'});
        }}>increase</button>
      </div>
    );
  }
}

const render = () => ReactDOM.render(<Counter></Counter>, document.getElementById('root'));

render();

store.subscribe(render);

serviceWorker.register();
