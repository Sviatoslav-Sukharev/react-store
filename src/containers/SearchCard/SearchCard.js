import React from "react";
import Search from "../../components/Search/Search";
import SliderCard from "../../components/SliderCard/SliderCard";
import "./SearchCard.css";

const SearchCard = props => {
  return (
    <div className="SearchCard">
      <Search />
      <SliderCard />
    </div>
  );
}

export default SearchCard;