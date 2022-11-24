import React, {useState, useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../Firebase/firebaseConfig';


const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [btn, setBtn] = useState(false);
    const [error, setError] = useState(false);

    const navigate = useNavigate()

    const handleEmail = (event) =>{
        setEmail(event.target.value);
    }
    const handlePassword = (event) =>{
        setPassword(event.target.value);
    }

    useEffect(() => {
        
        if(password.length > 5 && email !== ''){
            setBtn(true);
        }else if(btn){
            setBtn(false)
        }
    }, [email, password, btn])

    const handleSubmit = (event) => {
        event.preventDefault()
        
        signInWithEmailAndPassword(auth, email, password)
            .then((user) => {
                setEmail('')
                setPassword('')
                navigate('/welcome', {replacee : true})
            })
            .catch((error) => {
                setError(error)
                setEmail('')
                setPassword('')
            });
        }

  return (
    <div className='signUpLoginBox'>
        <div className='slContainer'>
            <div className='formBoxLeftLogin'>

            </div>
            <div className='formBoxRight'>
                <div className='formContent'>
                {error !== '' && <span>{error.message}</span>}
                    <h2>Connecxion</h2>
                    <form onSubmit={handleSubmit} >
                        <div className='inputBox'>
                            <input onChange={handleEmail}       value={email} type='email' id='email' required/>
                            <label htmlFor='email'>Email</label>
                        </div>
                        <div className='inputBox'>
                            <input onChange={handlePassword} value={password} type='password' id='password' required/>
                            <label htmlFor='password'>Mot de passe</label>
                        </div>

                        {<button disabled={btn ? false : true}>Connexion</button> }
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