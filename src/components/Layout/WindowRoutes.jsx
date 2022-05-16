import { getContext } from "../../hooks/UserContext";
import Cart from "./cart/Cart";
import Historic from "./historic/Historic";
import InfoProduct from "./products/InfoProduct";

function WindowRoutes(){
  const {windowsState} = getContext();

  const windows = {
    cart: <Cart />, //Cart
    historic: <Historic />, //Historic
    info_product: <InfoProduct />
  }

  const window = windows[windowsState.window];

  return window
}

export default WindowRoutes;