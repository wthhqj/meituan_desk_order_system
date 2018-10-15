import { createStore } from 'redux';


let reducer = function(previousState = {}, action){

  let newState ={};
  let menu = previousState.menu;


  switch(action.type){
    case 'LOAD_MENU':
    newState = {
        ...previousState,
        menu: action.payLoad.menu
      }
      return newState;

    case 'CHOOSE_THE_GOOD':
      menu.forEach( category => {
        category.goods.forEach( good => {
          if(good === action.payLoad.good){
            good.quantity++;
          }
        });
      });
      newState = {
        ...previousState,
        menu: menu
      }
      return newState;

    case 'INCREASE_ONE':
      menu.forEach( category => {
        category.goods.forEach( good => {
          if(good === action.payLoad.good){
            good.quantity++;
          }
        });
      });
      newState = {
        ...previousState,
        menu: menu
      }
      return newState;

    case 'REDUCE_ONE':
      menu.forEach( category => {
        category.goods.forEach( good => {
          if(good === action.payLoad.good){
            good.quantity--;
          }
        });
      });
      newState = {
        ...previousState,
        menu: menu
      }
      return newState;

    case 'REMOVE_ALL':
      menu.forEach( category => {
        category.goods.forEach( good => {
          good.quantity = 0;
        });
      });
      newState = {
        ...previousState,
        menu: menu
      }
      return newState;

    default:
      return previousState;
  }

}

const store = createStore(reducer);

export default store;
