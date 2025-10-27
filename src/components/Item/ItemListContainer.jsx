import { getProductByCategory } from "../../data/firestore";
import { getProducts } from "../../data/firestore";
import { useState, useEffect } from "react";
import Item from "./Item";
import { useParams } from "react-router";
import "./ItemListContainer.css"

function ItemListContainer(props) {
  const [products, setProducts] = useState([]);
  const { catParam } = useParams();

  useEffect(() => {
    if (catParam) {
      getProductByCategory(catParam)
        .then((productList) => {
          setProducts(productList);
        })
        .catch((error) => {
          alert("Algo salio mal en la carga de productos", error);
        })
        .finally(() => {
          console.log("Esto se ejecuta siempre");
        });
    } else {
      getProducts()
        .then((productList) => {
          setProducts(productList);
        })
        .catch((error) => {
          alert("Algo salio mal en la carga de productos", error);
        })
        .finally(() => {
          console.log("Esto se ejecuta siempre");
        });
    }
  }, [catParam]);

  return (
    <section>
      <h2>{props.greeting}</h2>
      {products.length === 0 ? "Cargando..." : ""}
      <div className="cards-container">
        {products.map((item) => {
          return <Item {...item} key={item.id} />;
        })}
      </div>
    </section>
  );
}

export default ItemListContainer;
