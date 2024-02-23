
import ItemContador from "./ItemContador";


const ItemDetalle = ({ id, name, codigo, color, categoria, precio, descripcion, img, stock }) => {
    console.log("Props en ItemDetalle:", { id, name, codigo, color, categoria, precio, descripcion, img, stock });

    return (
        <article className="contCardDetealle">
           
            <div className="contEncabezado">
                <h2> {name}</h2>
                <p> {codigo}</p>
            </div>

            <img className="cardImg" src={img} alt={name} />

            <div className="contDatos">
                <h4>{categoria}</h4>
                <p>{descripcion} {color}</p>
                <h3> {precio}</h3>

            </div>
            <div className="contContador">

                <ItemContador  inicial={1} stock={stock} onAdd={(cantidad) => console.log(`Añadir ${cantidad} al carrito`)} > </ItemContador>
            </div>
        </article>




    )
}
export default ItemDetalle;