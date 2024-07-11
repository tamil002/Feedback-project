import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useSignUp from '../../hooks/useSignUp'

const SignUp = () => {

    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: ""
    })

    const { loading, signup } = useSignUp()

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(inputs)
        
    }
    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto font-serif'>
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-300 bg-clip-padding backdrop-filter backdrop-blur-lg
            bg-opacity-0'>
                <h1 className='text-3xl font-semibold text-center text-slate-400'>
                    SignUp
                </h1>

                <form onSubmit={handleSubmit} className='grid gap-1'>
                    <div className=' grid gap-1'>
                        <label className='label '>
                            <span className='text-xl label-text'>Full Name</span>
                        </label>
                        <input
                            type='text'
                            placeholder='Enter Full Name'
                            className='w-full input input-bordered h-10'
                            value={inputs.name}
                            onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
                        />
                    </div>

                    <div className=' grid gap-1'>
                        <label className='label '>
                            <span className='text-xl label-text'>Email</span>
                        </label>
                        <input
                            type='email'
                            placeholder='Enter Email'
                            className='w-full input input-bordered h-10'
                            value={inputs.email}
                            onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
                        />
                    </div>

                    <div className=' grid gap-1'>
                        <label className='label '>
                            <span className='text-xl label-text'>Phone Number</span>
                        </label>
                        <input
                            type='phone'
                            placeholder='Enter Phone Number'
                            className='w-full input input-bordered h-10'
                            value={inputs.phone}
                            onChange={(e) => setInputs({ ...inputs, phone: e.target.value })}
                        />
                    </div>

                    <div className=' grid gap-1'>
                        <label className='label '>
                            <span className='text-xl label-text'>Password</span>
                        </label>
                        <input
                            type='password'
                            placeholder='Enter Password'
                            className='w-full input input-bordered h-10'
                            value={inputs.password}
                            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                        />
                    </div>

                    <div className=' grid gap-1'>
                        <label className='label '>
                            <span className='text-xl label-text'>Confirm Password</span>
                        </label>
                        <input
                            type='password'
                            placeholder='Enter Confirm Password'
                            className='w-full input input-bordered h-10 '
                            value={inputs.confirmPassword}
                            onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
                        />
                    </div>

                    <Link to='/login' className=' text-sm hover:underline hover:text-slate-400 mt-1 pl-2 inline-block'>
                        Already have an account?
                    </Link>

                    <div className='text-center'>
                        <button className='btn w-32 text-xl btn-sm mt-2'
                            disabled={loading}>
                            {loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp