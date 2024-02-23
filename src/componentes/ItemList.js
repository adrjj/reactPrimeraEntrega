import "../style/ItemList.css"
import Item from "./Item"


const ItemList = ({ productos }) => {
    return (
        <div className="contItemList">

            {productos.map(produc => <Item key={produc.id}{...produc}></Item>)}
        </div>


    )


}
export default ItemList


//creamos el componente ItemList  el mismo colocamos como parametro de la funcion ({productos}) 
//que seria el nombre de el array de objetos que creamos con el nombre de ArrayProductos.js 
// en el retorno creamo un div (una caja) para cargar el componente Item (es la estructura de la card)
// a la propiedad productos le agregamos el metodo map (con el fin de recorrer todo el array de objetos)
// usamos el parametro produc para indicar todos los elemetos del objeto, es el nombre dado a cada elemento en la iteración, y se está utilizando como prop para pasar la información del producto al componente 
// product.id para cargue este  elemento unico del array de objetos asi se diferencia del resto de objetos.
// ...prodct para que cargue todos los elemento