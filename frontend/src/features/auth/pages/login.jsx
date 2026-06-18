import React from 'react'
import "../auth.form.scss"
import { useNavigate,Link } from 'react-router'
const login=()=>{
    const handleSubmit=(e)=>{
        e.preventDefault()
    }
    return (
    <main>
        <div className='form_container'>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>

                <div className='input-group'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" placeholder='Enter email address' />
                </div>

                <div className='input-group'>
                    <label htmlFor="password">password</label>
                    <input type="password" name="password" id="password" placeholder='Enter password' />
                </div>

                <button className='button'> Submit</button>



            </form>

            <p>Don't have an account <Link to={"/register"} >Register</Link></p>

        </div>
    </main>

)
}

export default login