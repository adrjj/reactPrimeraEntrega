import "../style/cart.css";

import { useContext } from "react";
import { CartContext } from "./CartContex";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart, clearCart, totalCantidad, totalPrecio } = useContext(CartContext)

    if (totalCantidad () === 0) {
        return (
            <div>
                <h1>El carrito esta vacio</h1>
                <Link to="/" className="botonUno">Productos</Link>

            </div>
        )
    }


    return (
        <div>

            {cart.map((item) => (<CartItem key={item.id} item={item}>  </CartItem>))}
            <h3>Total:${totalPrecio()}</h3>
            <button onClick={() => clearCart()}>Limpiar Carrito</button>
            <Link to="/checkout" className="botonUno"> Checkout</Link>

        </div>
  
    )

 
}

export default Cart;