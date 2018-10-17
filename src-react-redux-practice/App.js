import React from 'react';

import store from './store.js'

class App extends React.Component{
  state = {
    count: store.getState().count
  }

  componentDidMount(){
    let listener = () => {
      let newState = store.getState();
      this.setState({
        count: newState.count
      });
    }
    store.subscribe(listener);
  }

  render(){
    return(
      <div>
        <div>{this.state.count}</div>
        <button onClick={() => {
          let action = {
            type: 'increase',
            payLoad: {
              num: 7
            }
          }
          store.dispatch(action);
        }}>increase</button>
      </div>
    );
  }
}

export default App;
