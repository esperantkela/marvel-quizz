import React from 'react'
import {Link} from 'react-router-dom'

const Login = () => {
  return (
    <div className='signUpLoginBox'>
        <div className='slContainer'>
            <div className='formBoxLeftLogin'>

            </div>
            <div className='formBoxRight'>
                <div className='formContent'>
                    <h2>Connecxion</h2>
                    <form >
                        <div className='inputBox'>
                            <input onChange={handleChange} value={pseudo} type='text' id='pseudo' required/>
                            <label htmlFor='pseudo'>Pseudo</label>
                        </div>
                        <div className='inputBox'>
                            <input onChange={handleChange} value={email} type='email' id='email' required/>
                            <label htmlFor='email'>Email</label>
                        </div>
                        <div className='inputBox'>
                            <input onChange={handleChange} value={password} type='password' id='password' required/>
                            <label htmlFor='password'>Mot de passe</label>
                        </div>
                        <div className='inputBox'>
                            <input onChange={handleChange} value={confirmPassword} type='password' id='confirmPassword' required/>
                            <label htmlFor='confirmPassword'>Confirmer le mot de passe</label>
                        </div>
                    </form>
                    <div className='linkContainer'>
                        <Link className='simpleLink' to='/login'>Pas de compte? Inscrivez-vous</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login