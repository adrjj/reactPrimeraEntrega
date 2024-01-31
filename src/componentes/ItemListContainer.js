import "../style/itemListContainer.css"
function ItemListContainer  ({saludo,descripcion}){

return(

<div className="contSaludo">

    <h1>{saludo}</h1>
    <p>{descripcion}</p>
 </div>



)


}
export default ItemListContainer;