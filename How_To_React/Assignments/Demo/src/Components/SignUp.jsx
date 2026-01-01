import React, { useState } from 'react'

const SignUp = () => {


    const [details, setDetails] = useState({
        username: "",
        email: "",
        phone: "",
        password: "",
        cpassword: "",
        skills: [],
        gender: "",
    })


    const handleClearForm = () => {
        setDetails(details.username="");
        setDetails(details.email="");
        setDetails(details.phone="");
        setDetails(details.cpassword="");
        setDetails(details.password="");
    }

    const handleChange = (e) => {

        const { name, value, type, checked } = e.target;

        if (type == 'checkbox') {

            if (checked) {
                let temp = Object.values(skills).push(value);
                setDetails((prev) => ({ ...prev, [name]: temp })); // value can be used as [value]

            } else {
                let temp = Object.values(skills).filter((word) => word !== value);
                setDetails((prev) => ({ ...prev, [name]: temp }));
            }

        }

        setDetails((prev) => ({ ...prev, [name]: value })); // value can be used as [value]

    }

    const handleSubmit = (e) => {
        e.preventDefault();

        handleClearForm();

        console.log(details);
    }


    return (
        <div className='flex justify-center items-center'>

            <form action="" className='flex flex-col gap-2 justify-center items-center p-10'>
                <h1 className='text-5xl mb-5 font-bold'>Sign Up Form</h1>
                <div>
                    <label htmlFor="username">Username : </label>
                    <input type="text" name='username' id='username' className='text-black border rounded-2xl p-2' value={details.username} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="email">Email : </label>
                    <input type="email" name='email' id='email' className='text-black border rounded-2xl p-2' value={details.email} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="phone">Phone no : </label>
                    <input type="number" name='phone' id='phone' className='text-black border rounded-2xl p-2' value={details.phone} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="gender">Gender : </label>
                    <input type="radio" name='gender' id='male' className='text-black border rounded-2xl p-2' value='male' onChange={handleChange} checked={details.gender === 'male'} /> Male
                    <input type="radio" name='gender' id='female' className='text-black border rounded-2xl p-2' value='female' onChange={handleChange} checked={details.gender === 'female'} /> Female
                </div>
                <div>
                    <label htmlFor="skills">Skills : </label>
                    <input type="checkbox" name='skills' className='text-black border rounded-2xl p-2' value='react' onChange={handleChange} checked={Object.values(details.skills).includes('react')} /> React
                    <input type="checkbox" name='skills' className='text-black border rounded-2xl p-2' value='node' onChange={handleChange} checked={Object.values(details.skills).includes('node')} /> Node
                </div>
                <div>
                    <label htmlFor="password">Password : </label>
                    <input type="password" name='password' id='password' className='text-black border rounded-2xl p-2' value={details.password} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="cpassword">Confirm Password : </label>
                    <input type="password" name='cpassword' id='cpassword' className='text-black border rounded-2xl p-2' value={details.cpassword} onChange={handleChange} />
                </div>

                <button type='submit' className='border px-3 py-2 rounded-2xl text-white bg-black' onClick={handleSubmit}>Submit</button>

            </form>


        </div>
    )
}

export default SignUp
