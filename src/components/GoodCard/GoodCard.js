import React, { useContext } from "react";
import "./GoodCard.css";
import CartContext from "../../context/CartContext/cartContext";
import FavouritesContext from "../../context/FavouritesContext/favouritesContext";

const GoodCard = ({title, price, url, goodId, onFavouritesClick, onCartClick}) => {
  const cartContext = useContext(CartContext);
  const favouritesContext = useContext(FavouritesContext);

  const isInCart = cartContext.cartState.goods.find(good => good.goodId === goodId);
  const isInFavourites = favouritesContext.favouritesState.favourites.find(item => item.goodId === goodId);

  return (
    <div className="GoodCard">
      <div className="GoodCard__img" style={{background: `url("${url}") 50%/100% no-repeat`}}></div>
      <div className="GoodCard__container">
        <div className="GoodCard__info-container">
          <div className="GoodCard__price">{price} ₽</div>
          <div className="GoodCard__title">{title}</div>
        </div>
        <div className="GoodCard__btn-container">
          <div className="GoodCard__btn" onClick={onCartClick}>
            В корзину&nbsp;
            <div className={`GoodCard__logo ${isInCart ? "not-empty" : "empty"}`}></div>
          </div>
          <div className={`GoodCard__btn ${isInFavourites ? "not-empty" : "empty"}`} onClick={onFavouritesClick}>В избранное</div>
        </div>
      </div>
    </div>
  );
}

export default GoodCard;