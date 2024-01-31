

import 'bootstrap/dist/css/bootstrap.min.css';

import "./style/app.css"
import CollapsibleExample from "./componentes/NavBar";
import ItemListContainer from "./componentes/ItemListContainer";







function App() {

    return (
        <div className="contGeneral">


            <CollapsibleExample enlaceUno="Animales" enlaceDos="Infantiles" enlaceTres="Logos" enlaceCuatro="Personajes" marca="Lamparas PINLED"> </CollapsibleExample>

            <div className='contListContainer '>
                <ItemListContainer saludo="Pinled Ilumina tu pasión"
                    descripcion="Tenés un espacio en blanco, siempre que lo miras, decís algo falta. Eso que falta es un PinLed, Decora tu espacio con los cientos de diseños que tenemos, y si algo no está te lo diseñamos…."
                ></ItemListContainer>
            </div>
        </div>

    )


};

export default App;