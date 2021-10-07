import React, { useContext } from "react";
import "./LastCartItem.css";
import CartContext from "../../context/CartContext/cartContext";

const LastCartItem = ({total}) => {
  const cartContext = useContext(CartContext);

  return (
    <div className="LastCartItem">
      <div className="LastCartItem__price">{total} ₽</div>
      <div className="LastCartItem__title">Итого</div>
      <div className="LastCartItem__btn" onClick={cartContext.clearCart}>Оплатить все</div>
    </div>
  );
}

export default LastCartItem;