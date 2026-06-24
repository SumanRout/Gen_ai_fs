import React, { useState } from 'react'
import "../auth.form.scss"
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

const Login = () => {
    const { loading, handleLogin } = useAuth()
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        await handleLogin({ email, password })
        navigate("/")

    }
    if (loading) {
        return (<main><h1>loading...</h1></main>)
    }

    return (
        <main>
            <div className='form_container'>
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>

                    <div className='input-group'>
                        <label htmlFor="email">Email</label>
                        <input
                            onChange={(e) => { setEmail(e.target.value) }}

                            type="email" name="email" id="email" placeholder='Enter email address' />
                    </div>

                    <div className='input-group'>
                        <label htmlFor="password">password</label>
                        <input
                            onChange={(e) => { setPassword(e.target.value) }}
                            type="password" name="password" id="password" placeholder='Enter password' />
                    </div>

                    <button className='button'> Submit</button>



                </form>

                <p>Don't have an account <Link to={"/register"} >Register</Link></p>

            </div>
        </main>

    )
}

export default Login