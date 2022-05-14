import { getContext } from "../../hooks/UserContext";
import Store from '../Layout/products/Store';

function WindowRoutes(){
  const {windowsState} = getContext();

  const windows = {
    cart: <Store />, //Cart
    time: <></>, //Historic
    infoProduct: <></>
  }

  const window = windows[windowsState.window];

  return window
}

export default WindowRoutes;