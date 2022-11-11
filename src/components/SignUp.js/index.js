import React from 'react'

const SignUp = () => {
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
                            <input type='text' id='pseudo' required/>
                            <label htmlFor='pseudo'>Pseudo</label>
                        </div>
                        <div className='inputBox'>
                            <input type='email' id='email' required/>
                            <label htmlFor='email'>Email</label>
                        </div>
                        <div className='inputBox'>
                            <input type='password' id='password' required/>
                            <label htmlFor='password'>Mot de passe</label>
                        </div>
                        <div className='inputBox'>
                            <input type='confirmPassword' id='email' required/>
                            <label htmlFor='confirmPasswordl'>Confirmer le mot de passe</label>
                        </div>
                    </form>
                </div>
            </div>
       </div>
    </div>
  )
}

export default SignUp