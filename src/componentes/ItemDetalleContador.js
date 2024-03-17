import { useState, useEffect } from "react"
import { getProductsById } from "../ArrayProductos"
import ItemDetalle from "./ItemDetalle";
import { useParams } from "react-router-dom";

import { getDoc,doc } from "firebase/firestore";
import {db}from "../config/Firebase"

const ItemDetalleContador = () => {
    const [producto, setProducto] = useState(null)

const   [loading,setLoading]=useState(true)
    const {itemId}=useParams()
    useEffect(() => {
        setLoading(true)
        const docRef=doc(db,"productos",itemId)

        getDoc(docRef)
        .then(response=>{
            const data=response.data()
            const productsAdapted={id:response.id,...data}
            setProducto(productsAdapted)
        })
        .catch(error=>
            {console.log (error)
        })
        .finally(()=>setLoading(false))

    }, [itemId])
return(

    <div>
         {loading ? (
                <p>Cargando...</p>
            ) : (
                <ItemDetalle {...producto} ></ItemDetalle>
            )}
     
     

    </div>
)


}
export default ItemDetalleContador


/* getProductsById(itemId)

.then(response => {
    setProducto(response)
})
.catch(error => {
    console.error(error)
}) */