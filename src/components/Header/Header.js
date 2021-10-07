import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import FavouritesContext from "../../context/FavouritesContext/favouritesContext";

const Header = props => {
  const favouritesContext = useContext(FavouritesContext);

  return (
    <div className="Header">
      <NavLink to="/" className="Header__link">Магазин</NavLink>
      <NavLink 
        to="/favourites" 
        className={`Header__link ${favouritesContext.favouritesState.favourites.length ? "not-empty" : "empty"}`}
      >
        Избранное
      </NavLink>
    </div>
  );
}

export default Header;