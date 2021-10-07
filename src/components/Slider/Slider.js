import React, { useContext } from "react";
import GoodsContext from "../../context/GoodsContext/goodsContext";
import "./Slider.css";

const Slider = props => {
  const goodsContext = useContext(GoodsContext);

  return (
    <div className="Slider">
      <div className="Slider__btn" onClick={goodsContext.onLeftHandler}>{"<"}</div>
      <div className="Slider__page">{goodsContext.goodsState.pageId + 1}</div>
      <div className="Slider__btn" onClick={goodsContext.onRightHandler}>{">"}</div>
    </div>
  );
}

export default Slider;