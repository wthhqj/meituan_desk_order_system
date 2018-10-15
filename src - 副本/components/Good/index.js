import React from 'react';
import './index.scss';

import store from '../../store';

import { Button } from 'antd-mobile';

class Good extends React.Component {

  handleClick(good) {
    let action = {
      type: 'CHOOSE_THE_GOOD',
      payLoad: {
        good: good
      }
    }
    store.dispatch(action);
  }

  render() {
    let good = this.props.good;

    return (
      <div className="Good">
        <div className="thumb_img">
          <img src="/tangfan.jpg"></img>
        </div>
        <div className="desc">
          <h4>{good.title}</h4>
          <div className="choice_bar">
            <span className="price">¥{good.smallPrice}</span>
            <Button
              size="small"
              style={{ color: '#ff6700' }}
              onClick={this.handleClick.bind(this, good)}
            >
              加入购物车
            </Button>
          </div>
        </div>
      </div>
    )
  }
}

export default Good;
