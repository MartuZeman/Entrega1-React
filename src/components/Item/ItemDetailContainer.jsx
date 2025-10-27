import { useParams } from "react-router";
import { getProductById } from "../../data/firestore";
import { useEffect, useState } from "react";
import { useContext } from "react";
import cartContext from "../../context/cartContext";
import "./ItemDetailContainer.css";


export default function ItemDetailContainer() {
  const { idParam } = useParams();
  const [item, setItem] = useState(null);
  const { addToCart } = useContext(cartContext);

  useEffect(() => {
    getProductById(idParam).then((res) => setItem(res));
  }, []);

  return (
    <div className="item-detail-container">
      {item ? (
        <>
          <img
            src={item.imgURL}
            alt={item.title}
            className="item-detail-image"
          />
          <div className="item-detail-info">
            <h3 className="item-detail-title">{item.title}</h3>
            <p className="item-detail-text">{item.description}</p>
            <p className="item-detail-text">Precio: $ {item.price}</p>
            <button
              className="item-detail-button"
              onClick={() => addToCart(item)}
            >
              Agregar al carrito
            </button>
          </div>
        </>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
}
