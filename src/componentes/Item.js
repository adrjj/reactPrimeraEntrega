import "../style/Item.css"
import { Link } from 'react-router-dom';


const Item = ({ id, name, codigo, color, categoria, precio, descripcion, img, stock }) => {


    return (
        <article className="contCard">
            <div className="contEncabezado">
                <h2>{name}</h2>
                <p> {codigo}</p>
            </div>
            <div className="contImg">
                <img src={img} alt={name} />
            </div>
            <div className="contDatos">

                <h3 className="cardPrecioH3">${precio}</h3>
                <h3 className="cardDisponibleH3"> Disponible:<p className="stock">  {stock}</p> </h3>
            </div>
            <Link className="botonUno" to={`./Item/${id}`}>Ver detalle</Link>


        </article>




    )
};
export default Item;