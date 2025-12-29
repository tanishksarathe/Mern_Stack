import React, { useState } from 'react'

const Login = () => {

    const [details, setDetails] = useState({
        email: "",
        password: "",
    })

    const handleChange = (e) => {

        const { name, value } = e.target;

        setDetails((prev) => ({ ...prev, [name]: value })); // value can be used as [value]

    }


    const handleSubmit = (e) => {
        e.preventDefault();


        alert(`${details.email}, ${details.password}`);
    }


    return (
        <div className='flex justify-center items-center flex-col my-20'>

            <h1 className='text-5xl font-bold'>Login Form</h1>

            <form action="" className='flex flex-col justify-center items-center p-10 gap-2'>

                <div>
                    <label htmlFor="email">Email : </label>
                    <input type="email" name='email' id='email' className='text-black border rounded-2xl p-2' value={details.email} onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="password">Password : </label>
                    <input type="password" name='password' id='password' className='text-black border rounded-2xl p-2' value={details.password} onChange={handleChange} />
                </div>


            </form>  <button type='submit' className='border px-3 py-2 rounded-2xl text-white bg-black' onClick={handleSubmit}>Login</button>

        </div>
    )
}

export default Login
