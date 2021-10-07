import React from "react";
import "./CartItem.css";

const CartItem = ({good: {title, price}, onDelete}) => {
  return (
    <div className="CartItem">
      <div className="CartItem__price">{price} ₽</div>
      <div className="CartItem__title">{title}</div>
      <div className="CartItem__btn" onClick={onDelete}>Удалить</div>
    </div>
  );
}

export default CartItem;