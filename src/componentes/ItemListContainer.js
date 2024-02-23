import { useEffect, useState } from "react"
import { getProducts, getProductsByCategory } from "../ArrayProductos"
import {useParams} from "react-router-dom"
import ItemList from "./ItemList"
import "../style/itemListContainer.css"
import ItemDetalle from "./ItemDetalle"
import ItemContador from "./ItemContador"




const ItemListContainer = ({ saludo, descripcion }) => {
    const [productos, setProductos]= useState ([])
    const {categoriaId} = useParams()

    useEffect(()=>{
        const asyncFunc= categoriaId ? getProductsByCategory : getProducts
        asyncFunc( categoriaId)
        .then(Respuesta=>{
            setProductos(Respuesta)
        })
        .catch(error =>{
            console.error(error)
        })
    },[categoriaId])

    return (

        <div className="contSaludo">

            <h1>{saludo}</h1>
            <p>{descripcion}</p>
            <ItemList productos={productos} ></ItemList>
           
            

        
        </div>

        
        



    )


}
export default ItemListContainer;