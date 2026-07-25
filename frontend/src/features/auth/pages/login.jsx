import React, { useState } from 'react'
import "../auth.form.scss"
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import Navbar from '../pages/Navbar';

const Login = () => {
    const { loading, handleLogin } = useAuth()
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        const result = await handleLogin({ email, password })
        if (result?.user) {
            navigate("/home")
        }
    }

    if (loading) {
        return (
            <div className="auth-page">
                <Navbar />
                <main className="auth-main">
                    <div className="auth-loading">
                        <div className="loading-spinner"></div>
                        <p>Signing you in...</p>
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
                        <h1>Welcome Back</h1>
                        <p>Sign in to continue your AI interview prep journey.</p>
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
                            <label htmlFor="password">Password</label>
                            <input
                                onChange={(e) => { setPassword(e.target.value) }}
                                type="password" name="password" id="password"
                                placeholder='••••••••' />
                        </div>

                        <button className='btn-submit' type="submit">
                            Sign In
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </button>
                    </form>

                    <p className="auth-switch">
                        Don't have an account?{" "}
                        <Link to="/register">Create one</Link>
                    </p>
                </div>
            </main>
        </div>
    )
}

export default Login