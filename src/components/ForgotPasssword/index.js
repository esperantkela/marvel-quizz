import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const ForgotPassword = () => {

    const [email, setEmail] = useState('');

    const handleSubmit = () => {

    }
    
  return (
    <div className='signUpLoginBox'>
        <div className='slContainer'>
            <div className='formBoxLeftForget'>

            </div>
            <div className='formBoxRight'>
                <div className='formContent'>
                    <h2>Connexion</h2>
                    <form onSubmit={handleSubmit} >
                        <div className='inputBox'>
                            <input onChange={(e) => setEmail(e.target.value)}  value={email} type='email' id='email' required/>
                            <label htmlFor='email'>Email</label>
                        </div>
                    </form>
                    <div className='linkContainer'>
                        <Link className='simpleLink' to='/register'>Pas de compte? Inscrivez-vous</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ForgotPassword