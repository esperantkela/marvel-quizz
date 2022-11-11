import React, {useState} from 'react'

const SignUp = () => {
    const data = {
        pseudo : '',
        email : '',
        password : '',
        confirmPassword : ''
    }

    const [loginData, setLoginData] = useState(data);

    const handleChange = (e) => {
        console.log(e)
        setLoginData({...loginData, [e.target.id]: e.target.value})
    }

    const {pseudo, email, password, confirmPassword} = loginData;

  return (
    <div className='signUpLoginBBox'>
       <div className='slContainer'>
            <div className='formBoxLeftSignup'>

            </div>
            <div className='formBoxRight'>
                <div className='formContent'>
                    <h2>Inscription</h2>
                    <form>
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
                </div>
            </div>
       </div>
    </div>
  )
}

export default SignUp