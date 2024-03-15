import { createContext, useState } from "react";


export const CartContext = createContext({ cart: [] })

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    console.log(cart) //comprobamos que nos traiga el arreglo.

    //funcion para agregar producto al carrito.
    const addItem = (item, cantidad) => {

        if (!isInCart(item.id)) {
            setCart(prev => [...prev, { ...item, cantidad }])
        } else {
            console.error("el producto ya fue agregado")
        }
       // console.log("Cantidad añadida:", cantidad);
        //console.log("Item añadido:", item);
    }

    //Funcion para remover producto

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)

    }

    //Funcion para borrar el carrito
    const clearCart = () => {
        setCart([])
    }
    //funcion  para saber si el producto ya esta en el carrito
    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }
    const totalPrecio = () => {
        return cart.reduce((prev, act) => prev + act.cantidad * act.precio, 0)
    }
    const totalCantidad = () => cart.reduce((acumulador, productosActual) => acumulador + productosActual.cantidad, 0);

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, totalPrecio, totalCantidad }}>
            {children}
        </CartContext.Provider>
    )
}