import { useContext } from "react";
import cartContext from "../../context/cartContext";
import { Link } from "react-router";

function CartWidget() {
  const { countItem } = useContext(cartContext);

  return (
    <Link to="/cart">
      <i>
        🛒 <span> {countItem()}</span>
      </i>
    </Link>
  );
}

export default CartWidget;
