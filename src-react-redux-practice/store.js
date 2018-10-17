import { createStore } from 'redux';

let reducer = (previousState = {count: 2}, action) => {
  let newState = {
    count: ++previousState.count
  }
  return newState;
}


const store = createStore(reducer);

export default store;