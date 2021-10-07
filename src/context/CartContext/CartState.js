import React, { useReducer } from "react";
import { ADD_GOOD, CLEAR_CART, DELETE_GOOD } from "./cartActions";
import CartContext from "./cartContext";
import cartReducer from "./cartReducer";

const CartState = ({children}) => {
  const initialState = {
    goods: [],
    total: 0,
  };

  const [cartState, dispatch] = useReducer(cartReducer, initialState);

  const addGood = (good) => {
    dispatch({type: ADD_GOOD, good});
  }

  const deleteGood = (id) => {
    dispatch({type: DELETE_GOOD, id});
  }

  const clearCart = () => {
    dispatch({type: CLEAR_CART});
  }

  return (
    <CartContext.Provider value={{
      cartState, addGood, deleteGood, clearCart,
    }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartState;