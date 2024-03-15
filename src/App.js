

import 'bootstrap/dist/css/bootstrap.min.css';

import "./style/app.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CollapsibleExample from "./componentes/NavBar";
import ItemListContainer from "./componentes/ItemListContainer";
import ItemDetalleContador from './componentes/ItemDetalleContador';
import Cart from "./componentes/Cart";
import { CartProvider } from './componentes/CartContex';










function App() {

    return (


        <BrowserRouter>
        <CartProvider>
       
            <div className="contGeneral">
                <CollapsibleExample enlaceUno="Famosos" enlaceDos="Juegos" enlaceTres="Logos" enlaceCuatro="Personajes" marca="Lamparas PINLED"> </CollapsibleExample>

                <div className='contListContainer '>
                    <Routes>



                        <Route path='/' element={<ItemListContainer saludo="Pinled Ilumina tu pasión"
                            descripcion="Tenés un espacio en blanco, siempre que lo miras, decís algo falta. Eso que falta es un PinLed, Decora tu espacio con los cientos de diseños que tenemos, y si algo no está te lo diseñamos…."
                        ></ItemListContainer>} ></Route>
                        <Route path='/categoria/:categoriaId' element={<ItemListContainer />} ></Route>
                        <Route path='/item/:itemId' element={<ItemDetalleContador />} ></Route>
                        <Route path='/categoria/:categoriaId/item/:itemId' element={<ItemDetalleContador />} ></Route>
                        <Route path='/Cart'element ={<Cart/>}  ></Route>
                        <Route path='*' element={<h1>si lees esto es por los enanos que viven en el servidor estan de paro ERROR 404</h1>} ></Route>




                    </Routes>
                </div>
            </div>
            </CartProvider>
        </BrowserRouter>
    )
    //path='/'  indica el total del home
    //path='/cateory/:categoriaId' los : indican que esta ruta espera un parametro dinamico  es decir que va a cambiar la ruta segun lo que cargue el parametro ene eso momento.

};

export default App;