import React from 'react';
import './index.scss';

// import store from '../../store';

import { connect } from 'react-redux';

import { Button } from 'antd-mobile';

class Good extends React.Component {

  render() {
    // let good = this.props.good;

    let { chooseTheGood, good } = this.props;

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
              onClick={() => chooseTheGood(good)}
            >
              加入购物车
            </Button>
          </div>
        </div>
      </div>
    )
  }
}
function mapStateToProps () {
  return {}
}

function mapDispatchToProps (dispatch) {
  let chooseTheGood = (good) => {
    let action = {
      type: 'CHOOSE_THE_GOOD',
      payLoad: {
        good: good
      }
    }
    dispatch(action);
  }
  
  return {
    chooseTheGood: chooseTheGood
  }
}

let HOComponent = connect(mapStateToProps, mapDispatchToProps)(Good);

export default HOComponent;
