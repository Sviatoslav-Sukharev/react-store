import React, { useContext } from "react";
import FavouritesItem from "../../components/FavouritesItem/FavouritesItem";
import Page from "../../hoc/Page/Page";
import "./Favourites.css";
import FavouritesContext from "../../context/FavouritesContext/favouritesContext";
import CartContext from "../../context/CartContext/cartContext";
import LastFavouritesItem from "../../components/LastFavouritesItem/LastFavouritesItem";

const Favourites = props => {
  const favouritesContext = useContext(FavouritesContext);
  const cartContext = useContext(CartContext);

  return (
    <Page>
      <div className="Favourites">
        <div className="Favourites__text Favourites__text_large">Избранное</div>
        {
          favouritesContext.favouritesState.favourites.length ?
          favouritesContext.favouritesState.favourites.map(item => {
            return (
              <FavouritesItem 
                key={item.goodId}
                item={item}
                onDelete={() => favouritesContext.deleteItem(item.goodId)}
                onCartClick={() => cartContext.addGood(item)}
              />
            );
          }) :
          <div className="Favourites__text">Здесь пока пусто</div>
        }
        <LastFavouritesItem />
      </div>
    </Page>
  );
}

export default Favourites;