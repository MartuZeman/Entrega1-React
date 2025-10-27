import "./Item.css";
import { Link } from "react-router";

function Item(props) {
  return (
    <div className="item-card">
      <h3 className="item-title">{props.title}</h3>
      <img src={props.imgURL} alt="img-product" />
      <p>
        {" "}
        Precio
        <span>$ {props.price}</span>
      </p>
      <Link to={`/detail/${props.id}`}>
        <button>Ver detalle</button>
      </Link>
    </div>
  );
}

export default Item;
