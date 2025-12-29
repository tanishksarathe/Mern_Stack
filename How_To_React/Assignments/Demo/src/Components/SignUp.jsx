import React, { useState } from 'react'

const SignUp = () => {


    const [details, setDetails] = useState({
        username:"",
        email:"",
        phone:"",
        password:"",
        cpassword:"",
    })

    const handleChange = (e) => {

        const {name , value} = e.target;

        setDetails((prev) => ({...prev, [name]:value})); // value can be used as [value]

    }

    const handleSubmit =(e)=>{
        e.preventDefault();

        
        console.log(details);
    }


  return (
    <div className='flex justify-center items-center'>

        <form action="" className='flex flex-col gap-2 justify-center items-center p-10'>
                <h1 className='text-5xl mb-5 font-bold'>Sign Up Form</h1>
            <div>
                <label htmlFor="username">Username : </label>
                <input type="text" name='username' id='username' className='text-black border rounded-2xl p-2' value={details.username} onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="email">Email : </label>
                <input type="email" name='email' id='email'  className='text-black border rounded-2xl p-2' value={details.email} onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="phone">Phone no : </label>
                <input type="number" name='phone' id='phone'  className='text-black border rounded-2xl p-2' value={details.phone} onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="password">Password : </label>
                <input type="password" name='password' id='password'  className='text-black border rounded-2xl p-2' value={details.password} onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="cpassword">Confirm Password : </label>
                <input type="password" name='cpassword' id='cpassword' className='text-black border rounded-2xl p-2' value={details.cpassword} onChange={handleChange}/>
            </div>

            <button type='submit' className='border px-3 py-2 rounded-2xl text-white bg-black' onClick={handleSubmit}>Submit</button>

        </form>


    </div>
  )
}

export default SignUp
