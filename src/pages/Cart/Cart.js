import React, { useContext } from "react";
import "./Cart.css";
import Page from "../../hoc/Page/Page";
import CartContext from "../../context/CartContext/cartContext";
import CartItem from "../../components/CartItem/CartItem";
import LastCartItem from "../../components/LastCartItem/LastCartItem";

const Cart = props => {
  const cartContext = useContext(CartContext);

  return (
    <Page>
      <div className="Cart">
      <div className="Cart__text Cart__text_large">Корзина</div>
        {
          cartContext.cartState.goods.length ?
          cartContext.cartState.goods.map(good => {
            return (
              <CartItem 
                key={good.id}
                good={good}
                onDelete={() => cartContext.deleteGood(good.id)}
              />
            );
          }) :
          <div className="Cart__text">Здесь пока пусто</div>
        }

        {
          cartContext.cartState.goods.length ?
          <LastCartItem total={cartContext.cartState.total} /> :
          null
        }
      </div>
    </Page>
  );
}

export default Cart;