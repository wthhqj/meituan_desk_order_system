import React from 'react';
import './index.scss';
import { Icon } from 'antd-mobile';

import Cart from '../../components/Cart';
import Good from '../../components/Good';

import { connect } from 'react-redux';

class AppHome extends React.Component {

  render() {
    let { menu } = this.props;
    return (
      <div className="AppHome">

        <div className="header">
          <div className="title">
            <h1>龙椒美味</h1>
            <Icon type="check-circle" onClick={() => this.props.history.push('/camera')}></Icon>
          </div>
          <p>中餐</p>
          <div className="card">
            此处是商家信息
          </div>
        </div>

        {
          menu ?
          <div className="center">
            <div className="left_list">
              <ul>
                {menu.map((item, index) => {
                  return <li key={index}>{item.category}</li>
                })}
              </ul>
            </div>
            <div className="right_list">
              <ul>
                {menu.map((item, index) =>
                  <li key={index}>
                    <p>{item.category}</p>
                    {item.goods.map((good, index) => <Good key={index} good={good}></Good>)}
                  </li>
                )}
              </ul>
            </div>
          </div>
          : null
        }

        <Cart></Cart>

      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    menu: state.menu
  }
}

let HOComponent = connect(mapStateToProps)(AppHome);

export default HOComponent;
