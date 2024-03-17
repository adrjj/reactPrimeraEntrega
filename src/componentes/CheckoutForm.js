import "../style/checkoutForm.css"
import { useState } from "react"

const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState("")
    const [phone, setphone] = useState("")
    const [email, setEmail] = useState("")

    const handleConfirm = (event) => {
        event.preventDefault()
        const userData = {
            name, phone, email
        }
        onConfirm(userData)
    }

    return (

        <div>
            <form className="formulario" onSubmit={handleConfirm}>
                <div className="contLabel">


                    <label > Nombre   <input className="inputFinal"  type="text" value={name} onChange={({ target }) => setName(target.value)} required></input>
                    </label>

                    <label> Telefono  <input className="inputFinal" type="tel" pattern="[0-9]{10}" value={phone} onChange={({ target }) => setphone(target.value)} required></input>
                    </label>

                    <label> Mail  <input className="inputFinal" type="email" value={email} onChange={({ target }) => setEmail(target.value)} required></input>
                    </label>
                </div>
               
                <div>
                    <button className="checkout" type="submit">  Crear orden de compra</button>
                </div>
            </form>


        </div>


    )



}
export default CheckoutForm