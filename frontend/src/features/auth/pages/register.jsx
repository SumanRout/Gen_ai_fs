import React from 'react'
import { useNavigate,Link} from 'react-router'

const register=()=>{

    const navigate=useNavigate()

    const handleSubmit=(e)=>{
        e.prevent_default()
    }
    return (
        <main>
        <div className='form_container'>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>

                <div className='input-group'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" placeholder='Enter email address' />
                </div>


                <div className='input-group'>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" placeholder='Enter username' />
                </div>

                <div className='input-group'>
                    <label htmlFor="password">password</label>
                    <input type="password" name="password" id="password" placeholder='Enter password' />
                </div>

                <button className='button'> Register</button>



            </form>

            <p>Already have an account ?<Link to={"/login"}>Login</Link></p>

        </div>
    </main>
    )
}

export default register