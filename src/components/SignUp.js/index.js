import React, {useState} from 'react'
import {createUserWithEmailAndPassword } from "firebase/auth";
import { auth, user } from '../Firebase/firebaseConfig';
import { setDoc } from 'firebase/firestore';
import { Link, useNavigate } from 'react-router-dom'



const SignUp = () => {
    const data = {
        pseudo : '',
        email : '',
        password : '',
        confirmPassword : ''
    }

    const [loginData, setLoginData] = useState(data);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        console.log(e)
        setLoginData({...loginData, [e.target.id]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const {email, password} = loginData
        createUserWithEmailAndPassword(auth, email, password)
        .then((AuthUser)  => {
            return setDoc(user(AuthUser.user.uid), {
                pseudo : pseudo,
                email : email
            })
        })
        .then(user => {
            setLoginData({...data})
            navigate('/welcome');
        })
        .catch(error => {
            setError(error)
            setLoginData({...data})
        })
       
        

    }

    const {pseudo, email, password, confirmPassword} = loginData;

    const btn = pseudo === '' || email === '' || password === '' || password !== confirmPassword
    ? <button  disabled>Inscription</button> : <button>Inscription</button> 

    //error handle

    const errorMsg = error !== '' && <span>{error.message}</span>

  return (
    <div className='signUpLoginBBox'>
       <div className='slContainer'>
            <div className='formBoxLeftSignup'>

            </div>
            <div className='formBoxRight'>
                <div className='formContent'>
                    {errorMsg}
                    <h2>Inscription</h2>
                    <form onSubmit={handleSubmit}>
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
                        {btn}
                    </form>
                    <div className='linkContainer'>
                        <Link className='simpleLink' to='/login'>Déjà inscrit? connectez-vous</Link>
                    </div>
                </div>
            </div>
       </div>
    </div>
  )
}

export default SignUp