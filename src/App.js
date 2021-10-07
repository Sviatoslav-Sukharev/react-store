import { Route, Switch } from 'react-router';
import Favourites from './pages/Favourites/Favourites';
import Main from './pages/Main/Main';
import Cart from './pages/Cart/Cart';
import GoodsState from './context/GoodsContext/GoodsState';
import CartState from './context/CartContext/CartState';
import FavouritesState from "./context/FavouritesContext/FavouritesState";

const App = props => {
  return (
    <FavouritesState>
      <CartState>
        <GoodsState>
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/favourites" component={Favourites} />
            <Route path="/cart" component={Cart} />
          </Switch>
        </GoodsState>
      </CartState>
    </FavouritesState>
  );
}

export default App;
