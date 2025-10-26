import { useParams } from "react-router";
import { getProductById } from "../data/firestore";
import { useEffect, useState } from "react";
import { useContext } from "react";
import cartContext from "../context/cartContext";

export default function ItemDetailContainer() {
  const { idParam } = useParams();
  const [item, setItem] = useState(null);
  const { addToCart } = useContext(cartContext);

  useEffect(() => {
    getProductById(idParam).then((res) => setItem(res));
  }, []);

  return (
    <div className="item-card">
      {item ? (
        <div>
          <h3 className="item-title">{item.title}</h3>
          <img src={item.imgURL} />
          <p> Precio : $ {item.price} </p>
          <p>{item.description}</p>
          <button onClick={() => addToCart(item)}>Agregar al carrito</button>
          <br />
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
}
