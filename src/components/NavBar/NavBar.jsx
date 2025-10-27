import CartWidget from "./CartWidget";
import { Link } from "react-router";
import "./NavBar.css";

function NavBar() {
  return (
    <nav>
      <ul>
        <Link to="">
          <li>Home</li>
        </Link>
        <Link to="/category/Tecnologia">
          <li>Tecnología</li>
        </Link>
        <Link to="/category/Moda">
          <li>Moda</li>
        </Link>
        <Link to="/category/Hogar">
          <li>Hogar</li>
        </Link>
      </ul>
      <div className="cart-container">
        <CartWidget />
      </div>
    </nav>
  );
}

export default NavBar;
