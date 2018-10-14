import { createStore } from 'redux';


let reducer = function(previousState = {}, action){

  switch(action.type){
    case 'LOAD_MENU':
      let a = {
        ...previousState,
        menu: action.payLoad.menu
      }
      return a;

    case 'CHOOSE_THE_GOOD':
      let menu = previousState.menu;
      menu.forEach( category => {
        category.goods.forEach( good => {
          if(good === action.payLoad.good){
            good.quantity++;
          }
        });
      });
      let b = {
        ...previousState,
        menu: menu
      }
      return b;

    default:
      return previousState;
  }

}

const store = createStore(reducer);

export default store;
