import React, {useState} from 'react'
import Card from './Card'

const Form = () => {
    const [user, setUser] = useState({
        nombre: '',
        comidaFavorita: ''
    })

    const [show, setShow] = useState(false)
    const [err, setErr] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        if(user.nombre.length >=3 && user.nombre !== ''&& user.comidaFavorita.length>=6) {
            setShow(true)
            setErr(false)
        } else {
            setErr(true)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label >Ingresa tu nombre</label>
                <input type="text" value={user.nombre} onChange={(e)=>setUser({...user,nombre: e.target.value})} />
                <label>Ingresa tu comida favorita</label>
                <input type="text" value={user.comidaFavorita}onChange={(e)=>setUser({...user,comidaFavorita: e.target.value})} />

                <button>Enviar</button>
                {err && 'Por favor chequea que la información sea correcta'}
            </form>
            {show && <Card nombre={user.nombre} comidaFavorita={user.comidaFavorita} />}
        </div>
  )
}

export default Form