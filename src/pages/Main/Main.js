import React, { useContext, useEffect } from "react";
import Page from "../../hoc/Page/Page";
import "./Main.css";
import CartCard from "../../components/CartCard/CartCard";
import SearchCard from "../../containers/SearchCard/SearchCard";
import GoodsContext from "../../context/GoodsContext/goodsContext";
import Slider from "../../components/Slider/Slider";
import GoodCard from "../../components/GoodCard/GoodCard";
import FavouritesContext from "../../context/FavouritesContext/favouritesContext";
import CartContext from "../../context/CartContext/cartContext";

const Main = props => {
  const goodsContext = useContext(GoodsContext);
  const favouritesContext = useContext(FavouritesContext);
  const cartContext = useContext(CartContext);

  useEffect(() => {
    goodsContext.setGoods();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Page>
      <div className="Main">
        <SearchCard />
        <CartCard />
        {
        goodsContext.goodsState.filteredGoods.map((good, index) => {
          if(goodsContext.goodsState.pageId * 10 <= index && index < (goodsContext.goodsState.pageId + 1) * 10) {
            return (
              <GoodCard
                key={good.goodId}
                goodId={good.goodId}
                title={good.title} 
                price={good.price} 
                url={good.url}
                onFavouritesClick={() => favouritesContext.addItem(good)}
                onCartClick={() => cartContext.addGood(good)}
              />
            );
          } else {
            return null;
          }
        })
        }
      </div>
      {
        goodsContext.goodsState.numOfPages ? 
        <Slider /> : 
        <div className="Main__text">Ничего не найдено</div>
      }
    </Page>
  );
}

export default Main;