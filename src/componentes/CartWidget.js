import "../style/cartWidget.css";
import carrito from "../asset/img/carrito.svg";
import { useContext } from "react";
import { CartContext } from "./CartContex";
import { Link } from "react-router-dom";



const Carrrito = () => {

    const { totalCantidad } = useContext(CartContext)


    return (

        <div className="contCarrito">
            <Link className="contA" to="/cart">
                <img className="carritoSVG" src={carrito} alt="carritoCompras"></img>
                <p className="contador">{totalCantidad()}</p>

            </Link>
        </div>


    )


}

export default Carrrito;