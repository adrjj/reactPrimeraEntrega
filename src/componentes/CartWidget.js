import carrito from "../asset/img/carrito.svg" 
import "../style/cartWidget.css"
function Carrrito(){
return(
<div className="contCarrito">

<img className="carritoSVG" src={carrito} alt="carritoCompras"></img>
<p className="contador">0</p>


</div>


)


}

export default Carrrito;