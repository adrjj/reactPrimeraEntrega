import { useContext, useState } from "react"
import "../style/checkout.css"
import { CartContext } from "./CartContex"
import { Timestamp, addDoc, collection, documentId, getDocs, query, where, writeBatch } from "firebase/firestore"
import { db } from "../config/Firebase"
import CheckoutForm from "./CheckoutForm"

const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState("")

    const { cart, totalPrecio, clearCart, totalCantidad, addItem } = useContext(CartContext)




    const createOrder = async ({ name, phone, email }) => {
        setLoading(true)


        //  const orderRef = collection(db, "orders");


        try {
            const objOrder = {
                buyer: {
                    name, phone, email
                },

                items: cart,
                total: totalCantidad(),
                date: Timestamp.fromDate(new Date())
            }
            const batch = writeBatch(db)
            const outOfStock = []
            const ids = cart.map(prod => prod.id)
            console.log("IDs del carrito:", ids);
            const productsRef = collection(db, "productos")
            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), "in", ids)))
            const { docs } = productsAddedFromFirestore

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productsAddedToCart = cart.find(prod => prod.id === doc.id)
                console.log("Producto agregado al carrito:", productsAddedToCart);
                const prodQuantity = productsAddedToCart?.cantidad
                console.log("el stock que tengo", stockDb)
                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc })
                }

            })


            if (outOfStock.length === 0) {
                await batch.commit()

                const orderRef = collection(db, "orders");



                const orderAdded = await addDoc(orderRef, objOrder)
                console.log("Documento de orden añadido:", orderAdded);
                setOrderId(orderAdded.id)
                clearCart()
            }

            else {
                console.log("El carrito está vacío");
                console.error("justo nos quedamos sin stock, en 24hs reponemos stock")

            }
        }
        catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }

    }



    if (loading) {
        return <h1 className="checkFinal">Se esta generando su orden de compra</h1>
    }
    if (orderId) {
        /* return  <h1 className="checkFinal">El numero de orden de compra es:
                <h2 className="orden">{orderId}</h2> </h1> */
            
        
       return (
            <div className="contCheckFinalS">
            <h1 className="checkFinal">El numero de orden de compra es:
                <h2 className="orden">{orderId}</h2>
            </h1>
            </div>
        ) 
    }
    return (
        <div className="ContForm">
            <h1 className="checkFinal" >Checkout</h1>
            <CheckoutForm onConfirm={createOrder}></CheckoutForm>

        </div>

    )


}

export default Checkout