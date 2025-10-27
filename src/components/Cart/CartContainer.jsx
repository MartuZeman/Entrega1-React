import cartContext from "../../context/cartContext"
import { useContext } from "react";
import { Link } from "react-router";
import { createBuyOrder } from "../../data/firestore";
import FormCheckout from "./FormPayment";
import "./CartContainer.css";

function CartContainer(){

    const {cart, removeItem, clearCart} = useContext(cartContext)
    const total = cart.reduce((acc, item) => acc + item.price * item.count, 0);


   async function handleCheckout(formData){
        const buyOrder = {
            buyer: formData,
            cart: cart,
            date: new Date(),
            total: total,
        }
        const orderDocument = await createBuyOrder(buyOrder)
        console.log(orderDocument)
        clearCart()
        alert(`Hiciste tu compra! el id de tu compra es: ${orderDocument.id} `)
    }

    if(cart.length === 0 ){
         return(
            <div className="volverBtn">
                <h2>Tu carrito esta vacio</h2>
                <Link to="/">
                <button >Volver al inicio</button>
                </Link>
            </div>
         )
    }
    return(
        <section>
            < h2>
               Tu carrito de compras 
            </h2>
            <div>
            <ul>
                {cart.map (itemInCart => <div key={itemInCart.id}>
                    <h4>{itemInCart.title}</h4>
                    <p>Price: {itemInCart.price}</p>
                    <p> Cantidad: {itemInCart.count}</p>
                    <button onClick={()=> removeItem(itemInCart.id)}>🗑️</button>
                </div>)
                }
            </ul>
            <button onClick={()=>clearCart()}> Vaciar Carrito </button>
            </div>

            <hr />
            <div>
                <h3> Total de tu compra: ${total}</h3>
            </div>
            {/* <button onClick={handlePayment}>Pagar</button> */}
            <FormCheckout handleCheckout={handleCheckout}/>

        </section>
    )

}

export default CartContainer;