import React from 'react';
import './index.scss';

import Cart from '../../components/Cart';
import Good from '../../components/Good';

import axios from 'axios';

class AppHome extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      menu: []
    }
  }


  componentWillMount() {
    setTimeout(() => {
      axios({
        url: '/menuData.json'
      }).then(res => {
        this.setState({
          menu: res.data
        });
      });
    }, 1000);
  }

  render() {
    return (
      <div className="AppHome">

        <div className="header">
          <h1>龙椒美味</h1>
          <p>中餐</p>
          <div className="card">
            card
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
