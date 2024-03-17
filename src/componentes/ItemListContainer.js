

import {getDocs, collection,query,where} from "firebase/firestore" 
import {db} from "../config/Firebase"   
import { useEffect, useState } from "react"

import {useParams} from "react-router-dom"
import ItemList from "./ItemList"
import "../style/itemListContainer.css"
  




const ItemListContainer = ({ saludo, descripcion }) => {
    const [productos, setProductos]= useState ([])
    const [loading,setLoading]=useState(true)
    const {categoryId} =useParams()
    
    useEffect(()=>{
        setLoading(true)

        console.log("categoryId:", categoryId); // Agrega este console.log
        const collectionRef=categoryId
        ? query(collection(db,"productos"),where("categoria","==",categoryId))
        :collection(db,"productos")
        
        getDocs(collectionRef)
        .then(response=>{
         const productsAdapted =response.docs.map(doc=>{
         const data = doc.data()
         return {id:doc.id, ...data}   
         })   
        setProductos(productsAdapted)
        })
        .catch(error =>{console.log (error)
        })
        .finally(()=>{
            setLoading(false)
        })

    },[categoryId])

    return (

        <div className="contSaludo">

            <h1>{saludo}</h1>
            <p>{descripcion}</p>
            {loading ? (
                <p>Cargando...</p>
            ) : (
                <ItemList productos={productos} />
            )}
           
            

        
        </div>

        
        



    )


}
export default ItemListContainer; 



