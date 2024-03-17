import { CartContext } from "./CartContex"
import { useContext } from "react"
import "../style/cartItem.css"



const CartItem = ({ item }) => {

    const { removeItem } = useContext(CartContext);
   //const { id, name, price } = item;
   console.log ("quiero ver estos datos",item.precio,item.cantidad)

    return (

        <div className="ContCardItem">

            <picture>
                <img className="cardItemImg" src={item.img} alt={item.name} />

            </picture>
            <div className="contCardItemDatos">
                <h2>{item.name} </h2>
                <h5>Cantidad: {item.cantidad}</h5>
                <h5>Subtotal:${item.cantidad * item.precio}</h5>
                <button className="botonBorrar" onClick={() => removeItem(item.id)}>Eliminar</button>
            </div>






        </div>


    )




}
export default CartItem;