import { createStore } from 'redux';


let reducer = (previousState = {value: 5}, action) => {

  switch(action.type){
    case 'increase':

      let newState = {
        value: ++previousState.value
      }
      return newState;

    default :
      return previousState
  }

}

const store = createStore(reducer);

export default store;
