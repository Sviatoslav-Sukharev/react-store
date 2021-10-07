import { FILTER_GOODS, ON_LEFT, ON_RIGHT, SET_GOODS } from "./goodsActions";

function goodsReducer(goodsState, action) {
  switch(action.type) {
    case SET_GOODS:
      const filtered = goodsState.filteredGoods.length ? [...goodsState.filteredGoods] : [...action.goods];
      return {
        ...goodsState,
        goods: [...action.goods],
        filteredGoods: filtered,
        numOfPages: Math.ceil(filtered.length / 10),
      };
    case ON_LEFT:
      return {
        ...goodsState,
        pageId: goodsState.pageId - 1,
      };
    case ON_RIGHT:
      return {
        ...goodsState,
        pageId: goodsState.pageId + 1,
      };
    case FILTER_GOODS:
      const filteredGoods = goodsState.goods.filter(good => {
        return good.title.toLocaleLowerCase().includes(action.string.toLocaleLowerCase());
      });
      return {
        ...goodsState,
        filteredGoods,
        numOfPages: Math.ceil(filteredGoods.length / 10),
        pageId: 0,
      };
    default:
      return goodsState;
  }
}

export default goodsReducer;