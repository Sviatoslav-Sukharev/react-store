import React, { useContext } from "react";
import CartContext from "../../context/CartContext/cartContext";
import "./FavouritesItem.css";

const FavouritesItem = ({item: {title, price, goodId}, onDelete, onCartClick}) => {
  const cartContext = useContext(CartContext);
  const isInCart = cartContext.cartState.goods.find(good => good.goodId === goodId);

  return (
    <div className="FavouritesItem">
      <div className="FavouritesItem__price">{price} ₽</div>
      <div className="FavouritesItem__title">{title}</div>
      <div className="FavouritesItem__btn" onClick={onCartClick}>
        В корзину&nbsp;
        <div className={`FavouritesItem__logo ${isInCart ? "not-empty" : "empty"}`}></div>
      </div>
      <div className="FavouritesItem__btn" onClick={onDelete}>Удалить</div>
    </div>
  );
}

export default FavouritesItem;