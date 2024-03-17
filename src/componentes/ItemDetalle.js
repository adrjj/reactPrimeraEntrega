import "../style/itemDetalle.css"
import ItemContador from "./ItemContador";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContex";



const ItemDetalle = ({ id, name, codigo, color, categoria, precio, descripcion, img, stock }) => {
    //console.log("Props en ItemDetalle:", { id, name, codigo, color, categoria, precio, descripcion, img, stock });
    const [cantidadAdded, setCantidadAdded] = useState(0)

    const {addItem}= useContext(CartContext)

    const handleOnAdd = (cantidad) => {
        setCantidadAdded(cantidad)
        const item ={
            id,name,precio,stock,img,cantidad
        }

        addItem(item,cantidad)
    }
    return (
        <article className="contCardDetealle">

            <div className="contEncabezado">
                <h2> {name}</h2>
                <p> {codigo}</p>
            </div>

            <img className="cardImg" src={img} alt={name} />

            <div className="contDatos">
                <h4 className="categoria"> Categoria: {categoria}</h4>
                <p className="descripcion">{descripcion} Color: {color}</p>
                <h3 className="cardPrecioH3"> ${precio}</h3>

            </div>
            <div className="contContador">
                { cantidadAdded > 0 ? (
                    <Link to="/Cart" className="botonUno" >Terminar Compra </Link>
                ):(
                    <ItemContador inicial={1} stock={stock} onAdd={handleOnAdd} > </ItemContador>
                )

                }

                
            </div>
        </article>




    )
}
export default ItemDetalle;