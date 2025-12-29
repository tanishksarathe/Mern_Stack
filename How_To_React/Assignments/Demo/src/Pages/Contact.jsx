import React, { useState } from 'react'

function Contact() {

  const [details, setDetails] = useState({
    fullName: "",
    message: "",
    email: "",
  })

  const [loading, setLoading] = useState(false);


  const handleClearForm = () => {
    setFullName("");
    setEmail("");
    setMessage("");
  }

  const handleChange = () => {

    const {name, value} = e.target;

    setDetails((prev) => (
      {...prev, [name]: [value]}
    ))


  }

  console.log(details);

  const handleSubmit = (e) => {

    e.preventDefault();
    setLoading(true);

    try {


      const data = {
        name: fullName,
        email: email,
        message: message,
      }

      console.log(data);


    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
      handleClearForm();
    }

  }

  return (
    <>
      <h1 className='text-5xl text-center mb-5 font-bold'>Contact</h1>

      <div className='p-4 justify-center flex border w-100 mx-auto rounded-3xl'>
        <form action="" className='flex gap-3 flex-col' onSubmit={handleSubmit} onReset={handleClearForm}>
          <div className='flex'>
            <label htmlFor="fullName" className='mr-2'> Username :</label>
            <input type="text" name='fullName' id='fullName' className='border rounded-2xl p-2 border-black' placeholder='Enter your Full Name' value={fullName} onChange={(e) => setFullName(e.target.value)} required />
          </div>
          <div className='flex'>
            <label htmlFor="email" className='mr-2'>Email :</label>
            <input type="email" name='email' id='email' placeholder='Enter your Email' className='border rounded-2xl p-2 border-black' value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className='flex'>
            <label htmlFor="message" className='mr-2'>Message :</label>
            <textarea name="message" id="message" placeholder='Enter Message' className='border rounded-lg p-2 border-black' value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
          </div>

          <button type='submit' className='border ml-20 rounded-xl px-2 py-2'>
            {loading ? "Loading" : "Submit"}</button>
          <button type='reset' className='border ml-20 rounded-xl px-2 py-2'>Reset</button>
        </form>
      </div>

    </>

  )
}

export default Contact
