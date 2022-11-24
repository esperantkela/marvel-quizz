import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [btn, setBtn] = useState(false);

    const handleEmail = (event) =>{
        setEmail(event.target.value);
    }
    const handlePassword = (event) =>{
        setPassword(event.target.value);
    }

    useEffect(() => {
        
        if(password.length > 5 && email != ''){
            setBtn(true);
        }
    }, [])

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
                            <input onChange={handleEmail}       value={email} type='email' id='email' required/>
                            <label htmlFor='email'>Email</label>
                        </div>
                        <div className='inputBox'>
                            <input onChange={handlePassword} value={password} type='password' id='password' required/>
                            <label htmlFor='password'>Mot de passe</label>
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

export default Login