import React, {useState} from "react";
import "./SliderCard.css";

const SliderCard = props => {
  const [id, setId] = useState(0);
  
  const cards = [
    (<p className="SliderCard__text"><span className="blue">Найдите</span> товар</p>),
    (<p className="SliderCard__text">Добавьте в <span className="orange">избранное</span></p>),
    (<p className="SliderCard__text">Или в <span className="grey">корзину</span></p>),
    (<p className="SliderCard__text">И <span className="green">купите</span>!</p>),
  ];

  const onLeftHandler = () => {
    if(id !== 0) {
      setId(prev => prev - 1);
    }
  }

  const onRightHandler = () => {
    if(id !== cards.length - 1) {
      setId(prev => prev + 1);
    }
  }

  return (
    <div className="SliderCard">
      <div className="SliderCard__btn" onClick={onLeftHandler}>{"<"}</div>
      <div className="SliderCard__card">
        {cards[id]}
      </div>
      <div className="SliderCard__btn" onClick={onRightHandler}>{">"}</div>
    </div>
  );
}

export default SliderCard;