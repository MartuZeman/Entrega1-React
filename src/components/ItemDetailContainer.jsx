import { useParams } from "react-router"
import { getProductById } from "../data/mockAPI";
import { useEffect, useState } from "react";

export default function ItemDetailContainer() {

    const {idParam} = useParams();
    const [item, setItem] = useState(null)

    useEffect( ()=> {
          getProductById(idParam).then(res => setItem(res))
    }, [] )
  

    return (
        <div className='item-card'>
            {
            item ?             
            <div>
            <h3 className='item-title'>{item.title}</h3>
            <img src={item.imgURL}/>
            <p> Precio : $ {item.price} </p>
            <p>Descripcion...</p>
            <button >Comprar</button>
            <br />
            </div>
            :
            <p>Cargando...</p>
            }
        </div>
    )
}
