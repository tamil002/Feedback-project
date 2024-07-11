import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../../hooks/useLogin'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { loading, login } = useLogin()

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(email, password)
    }
    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto font-serif'>
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-300 bg-clip-padding backdrop-filter backdrop-blur-lg
            bg-opacity-0'>
                <h1 className='text-3xl font-semibold text-center text-slate-400'>
                    Login
                </h1>

                <form onSubmit={handleSubmit}>
                    <div className=''>
                        <label className='label p-1'>
                            <span className='text-xl label-text'>Email</span>
                        </label>
                        <input
                            type='email'
                            placeholder='Enter Email'
                            className='w-full input input-bordered h-10 mt-1'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className='pt-1'>
                        <label className='label '>
                            <span className='text-xl label-text'>Password</span>
                        </label>
                        <input
                            type='password'
                            placeholder='Enter Password'
                            className='w-full input input-bordered h-10'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <Link to='/signup' className=' text-sm hover:underline hover:text-slate-400 mt-2 pl-1 inline-block'>
                        {"Don't"} have an account?
                    </Link>

                    <div className='text-center'>
                        <button className='btn w-32 text-xl btn-sm mt-2' disabled={loading}>
                            {loading ? <span className='loading loading-spinner'></span> : "Login"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login