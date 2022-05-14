import { getContext } from "../../hooks/UserContext";
import Store from '../Layout/products/Store';
import Cart from "./Cart";
import InfoProduct from "./products/InfoProduct";

function WindowRoutes(){
  const {windowsState} = getContext();

  const windows = {
    cart: <Cart />, //Cart
    historic: <Store />, //Historic
    info_product: <InfoProduct />
  }

  const window = windows[windowsState.window];

  return window
}

export default WindowRoutes;