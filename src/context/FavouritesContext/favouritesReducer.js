import { ADD_ITEM, DELETE_ITEM } from "./favouritesActions";

function favouritesReducer(favouritesState, action) {
  switch(action.type) {
    case ADD_ITEM:
      return {
        ...favouritesState,
        favourites: [...favouritesState.favourites, action.item],
      };
    case DELETE_ITEM:
      return {
        ...favouritesState,
        favourites: favouritesState.favourites.filter(item => item.goodId !== action.goodId),
      };
    default:
      return favouritesState;
  }
}

export default favouritesReducer;