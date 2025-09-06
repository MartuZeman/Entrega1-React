import { useState } from 'react'
import './Item.css'

function Item(props){

    const [state, setState] = useState("No agregado al carrito")


function agregarAlCarrito(){

    setState("Item agregado")
}
  
    return (
        <div className='item-card'>
            <h3 className='item-title'>{props.title}</h3>
            <img src={props.imgURL} alt="img-product" />
            <p> Precio
                <span>$ {props.price}</span>
            </p>
            <button onClick={agregarAlCarrito}>Agregar al carrito</button>
            <br />
            <small>{state}</small>
        </div>
    )
}

export default Item