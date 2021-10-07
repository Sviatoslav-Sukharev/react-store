import React, { useReducer } from "react";
import { ADD_ITEM, DELETE_ITEM } from "./favouritesActions";
import FavouritesContext from "./favouritesContext";
import favouritesReducer from "./favouritesReducer";

const FavouritesState = ({children}) => {
  const initialState = {
    favourites: [],
  };
  
  const [favouritesState, dispatch] = useReducer(favouritesReducer, initialState);

  const addItem = (item) => {
    if(!favouritesState.favourites.find(favouriteItem => item.goodId === favouriteItem.goodId)) {
      dispatch({type: ADD_ITEM, item});
    }
  }

  const deleteItem = (goodId) => {
    dispatch({type: DELETE_ITEM, goodId});
  }

  return (
    <FavouritesContext.Provider value={{
      favouritesState, addItem, deleteItem
    }}>
      {children}
    </FavouritesContext.Provider>
  );
}

export default FavouritesState;