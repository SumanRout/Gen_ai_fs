import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import "../auth.form.scss"
import Navbar from '../pages/Navbar';

const Register = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const { loading, handleRegister } = useAuth()

    const handleSubmit = async (e) => {
        e.preventDefault()
        await handleRegister({ username, email, password })
        navigate("/")
    }

    if (loading) {
        return (
            <div className="auth-page">
                <Navbar />
                <main className="auth-main">
                    <div className="auth-loading">
                        <div className="loading-spinner"></div>
                        <p>Creating your account...</p>
                    </div>
                </main>
            </div>
        )
    }

    return (
        <div className="auth-page">
            <Navbar />
            <main className="auth-main">
                <div className="form_container">
                    <div className="form-header">
                        <h1>Create Account</h1>
                        <p>Start your AI-powered interview prep journey today.</p>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className='input-group'>
                            <label htmlFor="email">Email Address</label>
                            <input
                                onChange={(e) => { setEmail(e.target.value) }}
                                type="email" name="email" id="email"
                                placeholder='you@example.com' />
                        </div>

                        <div className='input-group'>
                            <label htmlFor="username">Username</label>
                            <input
                                onChange={(e) => { setUsername(e.target.value) }}
                                type="text" name="username" id="username"
                                placeholder='Choose a username' />
                        </div>

                        <div className='input-group'>
                            <label htmlFor="password">Password</label>
                            <input
                                onChange={(e) => { setPassword(e.target.value) }}
                                type="password" name="password" id="password"
                                placeholder='••••••••' />
                        </div>

                        <button className='btn-submit' type="submit">
                            Create Account
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </button>
                    </form>

                    <p className="auth-switch">
                        Already have an account?{" "}
                        <Link to="/login">Sign in</Link>
                    </p>
                </div>
            </main>
        </div>
    )
}

export default Register