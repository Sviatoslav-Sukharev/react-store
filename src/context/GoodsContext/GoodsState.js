import React, { useReducer } from "react";
import { FILTER_GOODS, ON_LEFT, ON_RIGHT, SET_GOODS } from "./goodsActions";
import GoodsContext from "./goodsContext"
import goodsReducer from "./goodsReducer";

const GoodsState = ({children}) => {
  const initialState = {
    goods: [],
    filteredGoods: [],
    numOfPages: 0,
    pageId: 0,
  };

  const [goodsState, dispatch] = useReducer(goodsReducer, initialState);

  const onRightHandler = () => {
    if(goodsState.pageId !== goodsState.numOfPages - 1) {
      dispatch({type: ON_RIGHT});
    }
  }

  const onLeftHandler = () => {
    if(goodsState.pageId !== 0) {
      dispatch({type: ON_LEFT});
    }
  }

  const searchHandler = (string) => {
    dispatch({type: FILTER_GOODS, string});
  }

  async function setGoods() {
    dispatch({type: SET_GOODS, goods: [
      {goodId: 0, title: "Ноутбук", price: 30000, url: "https://mr-robot-kld.s3.eu-west-2.amazonaws.com/iblock/d1c/d1c3b6c8db62b7e95c030b5e727cafed/e4cc66d820ca2d181290e0d1ff99258e.jpg"},
      {goodId: 1, title: "Ноутбук", price: 40000, url: "https://miasskoe.eto1.ru/img-HAIER/A1400EDTD0036475RU-1-4-1630550823.jpg"},
      {goodId: 2, title: "Ноутбук", price: 54000, url: "https://aty800.com/tablet/.assets/thumbnail/elite-dragonfly-1200wi.jpg"},
      {goodId: 3, title: "Ноутбук", price: 41000, url: "https://items.s1.citilink.ru/1590600_v01_b.jpg"},
      {goodId: 4, title: "Ноутбук", price: 37000, url: "https://static.price.ru/images/models/1000x1000/noutbuk/digma-eve-15-c407/ed01e343ca6cd77bccba83c9a06473a4.JPEG"},
      {goodId: 5, title: "Смартфон", price: 60000, url: "https://img.gkbcdn.com/s3/p/2019-11-22/apple-iphone-x-64gb-gray--used--20191122085301167.jpg"},
      {goodId: 6, title: "Смартфон", price: 55000, url: "https://images-na.ssl-images-amazon.com/images/I/61GUOlgK7GL.jpg"},
      {goodId: 7, title: "Смартфон", price: 17000, url: "https://rostov-na-donu.xiacom.ru/upload/iblock/698/-xiaomi-redmi-k30-4g-128gb-8gb-pink-.jpg"},
      {goodId: 8, title: "Наушники", price: 5000, url: "https://gyroshopspb.ru/upload/iblock/7bc/7bc5501afc78e8a61b3d4d4cf1559d5d.jpg"},
      {goodId: 9, title: "Наушники", price: 4000, url: "https://audio-technica-shop.ru/image/cache/catalog/0708/besprovodnye-naushniki-s-mikrofonom-jbl-c45-bt-black-100023587377-1000x1000.jpg"},
      {goodId: 10, title: "Робот-пылесос", price: 17000, url: "https://shop-polaris.ru/upload/iblock/7ae/61_14.jpg"},
      {goodId: 11, title: "Монитор", price: 13000, url: "https://cdn1.ozone.ru/s3/multimedia-g/6040344352.jpg"},
      {goodId: 12, title: "Клавиатура", price: 3000, url: "https://cdn1.ozone.ru/s3/multimedia-s/6009413020.jpg"},
      {goodId: 13, title: "Мышь", price: 5000, url: "https://pcshop.ua/image/cache/catalog/tovar/24356-1024x768.jpg"},
    ]});
  }

  return (
    <GoodsContext.Provider value={{
      goodsState, setGoods, onRightHandler, onLeftHandler, searchHandler,
    }}>
      {children}
    </GoodsContext.Provider>
  );
}

export default GoodsState;