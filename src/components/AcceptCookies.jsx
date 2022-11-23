import React,{useState} from 'react'

const AcceptCookies = () => {

    const [cookies, setCookies] = useState(false)
  return (
    <div>
        <label htmlFor="cookies">Acepta cookies</label>
        <input 
        type="checkbox"  
        id="cookies"
        
        onClick={() => setCookies(!cookies)}
        />
        <article title='Confirmacion cookies'>{cookies ? 'Cookies aceptadas': 'Confirma cookies'}</article>
    </div>
  )
}

export  {AcceptCookies}