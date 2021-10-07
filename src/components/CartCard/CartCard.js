import React, { useContext } from "react";
import { useHistory } from "react-router";
import "./CartCard.css";
import CartContext from "../../context/CartContext/cartContext";

const CartCard = () => {
  const history = useHistory();
  const cartContext = useContext(CartContext);

  return (
    <div className="CartCard" onClick={() => history.push("/cart")}>
      <p className="CartCard__title">Корзина&nbsp;</p>
      <div className={`CartCard__logo ${cartContext.cartState.goods.length ? "not-empty" : "empty"}`}></div>
    </div>
  );
}

export default CartCard;