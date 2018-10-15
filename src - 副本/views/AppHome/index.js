import React from 'react';
import './index.scss';

import store from '../../store';

import Cart from '../../components/Cart';
import Good from '../../components/Good';

let cancelListener;

class AppHome extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      menu: []
    }
  }

  componentWillMount() {
    let listener = () => {
      let menu = store.getState().menu;
      this.setState({ menu });
    }
    cancelListener = store.subscribe(listener);
  }

  componentDidMount() {
    let menu = store.getState().menu;
    if (!menu) return;
    this.setState({ menu: menu });
  }

  componentWillUnmount(){
    cancelListener();
  }

  render() {
    return (
      <div className="AppHome">

        <div className="header">
          <h1>龙椒美味</h1>
          <p>中餐</p>
          <div className="card">
            此处是商家信息
          </div>
        </div>

        <div className="center">
          <div className="left_list">
            <ul>
              {this.state.menu.map((item, index) => {
                return <li key={index}>{item.category}</li>
              })}
            </ul>
          </div>
          <div className="right_list">
            <ul>
              {this.state.menu.map((item, index) =>
                <li key={index}>
                  <p>{item.category}</p>
                  {item.goods.map((good, index) => <Good key={index} good={good}></Good>)}
                </li>
              )}
            </ul>
          </div>
        </div>

        <Cart></Cart>

      </div>
    );
  }
}

export default AppHome;
