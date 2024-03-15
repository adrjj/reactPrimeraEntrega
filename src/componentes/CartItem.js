import { CartContext } from "./CartContex"
import { useContext } from "react"




const CartItem = ({ item }) => {

    const { removeItem } = useContext(CartContext);
   //const { id, name, price } = item;
   console.log ("quiero ver estos datos",item.precio,item.cantidad)

    return (

        <div>

            <picture>
                <img src={item.img} alt={item.name} />

            </picture>
            <div>
                <h2>{item.name} </h2>
                <p>Cantidad: {item.cantidad}</p>
                <p>Subtotal:${item.cantidad * item.precio}</p>
                <button onClick={() => removeItem(item.id)}>Eliminar</button>
            </div>






        </div>


    )




}
export default CartItem;