import React, { useContext } from "react";
import { useHistory } from "react-router";
import "./LastFavouritesItem.css";
import CartContext from "../../context/CartContext/cartContext";

const LastFavouritesItem = props => {
  const history = useHistory();
  const cartContext = useContext(CartContext);

  return (
    <div className="LastFavouritesItem">
      <div className="LastFavouritesItem__btn" onClick={() => history.push("/cart")}>
        Корзина&nbsp;
        <div className={`LastFavouritesItem__logo ${cartContext.cartState.goods.length ? "not-empty" : "empty"}`}></div>
      </div>
    </div>
  );
}

export default LastFavouritesItem;