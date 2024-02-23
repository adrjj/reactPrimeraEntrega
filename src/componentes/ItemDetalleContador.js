import { useState, useEffect } from "react"
import { getProductsById } from "../ArrayProductos"
import ItemDetalle from "./ItemDetalle";
import { useParams } from "react-router-dom";


const ItemDetalleContador = () => {
    const [producto, setProducto] = useState(null)
const {itemId}=useParams()
    useEffect(() => {
        getProductsById(itemId)

            .then(response => {
                setProducto(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [itemId])
return(

    <div>
        <ItemDetalle {...producto} ></ItemDetalle>
     

    </div>
)


}
export default ItemDetalleContador