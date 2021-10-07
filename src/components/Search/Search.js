import React, { useContext } from "react";
import GoodsContext from "../../context/GoodsContext/goodsContext";
import "./Search.css";

const Search = props => {
  const goodsContext = useContext(GoodsContext);

  const onEnter = event => {
    if(event.key === "Enter") {
      goodsContext.searchHandler(event.target.value);
    }
  }

  return (
    <div className="Search">
      <input 
        className="Search__input"
        type="text"
        placeholder="Поиск товаров"
        onKeyPress={onEnter}
      />
    </div>
  );
}

export default Search;