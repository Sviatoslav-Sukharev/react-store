import { ADD_GOOD, CLEAR_CART, DELETE_GOOD } from "./cartActions";

function cartReducer(cartState, action) {
  switch(action.type) {
    case ADD_GOOD:
      const good = {...action.good};
      good.id = cartState.goods.length;
      return {
        ...cartState,
        goods: [...cartState.goods, good],
        total: cartState.total + good.price,
      };
    case DELETE_GOOD:
      const goods = cartState.goods.filter(good => good.id !== action.id);
      let total = 0;
      for(let good of goods) {
        total += good.price;
      }
      return {
        ...cartState,
        goods,
        total,
      };
    case CLEAR_CART:
      return {
        ...cartState,
        total: 0,
        goods: [],
      };
    default:
      return cartState;
  }
}

export default cartReducer;