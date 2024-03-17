import "../style/cart.css";


import { useContext } from "react";
import { CartContext } from "./CartContex";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import carritoTriste from "../asset/img/carritoTriste.svg";
const Cart = () => {
    const { cart, clearCart, totalCantidad, totalPrecio } = useContext(CartContext)

    if (totalCantidad() === 0) {
        return (
            <div className="contAvisoCarroVacio">
                <img className="carritoTriste" src={carritoTriste} alt="carritoCompras"/>
                <h1>Su carrtio esta vacio</h1>
                <Link to="/" className="botonUno">Productos</Link>

            </div>
        )
    }


    return (
        <div className="contTotalCart">

            {cart.map((item) => (<CartItem key={item.id} item={item}>  </CartItem>))}
            <div className="contTotalDetalle">
                <h3 className="cardPrecioH3" >Total:$ {totalPrecio()}</h3>
                <div className="contButonDetalle" >
                    <Link to="/checkout" className="checkout"> Checkout</Link>
                    <button  className="botonBorrar" onClick={() => clearCart()}>Limpiar Carrito</button>

                </div>
            </div>
        </div>

    )


}

export default Cart;