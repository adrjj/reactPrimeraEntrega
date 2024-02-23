import { useState } from "react";

const ItemContador= ({stock, inicial, onAdd})=>{
    const[ cantidad, setCantidad]= useState(inicial)

    const incremento =()=>{
if (cantidad < stock){
    setCantidad(cantidad +1)
}
}
const decrecimiento =()=>{
    if (cantidad > 1){
        setCantidad(cantidad-1)
    }
}


return(


<div >
    <div className="contador">
    <button  className="botonMenos" onClick={decrecimiento}> - </button>
    <h4>{cantidad}</h4>
    <button className="botonMas" onClick={incremento}> + </button>
    
    </div>
<div>
    <button className="botonUno" onClick={()=> onAdd(cantidad)} disabled={!stock}  > Agregar al carrito</button>
</div>


</div>


)



}
export default ItemContador