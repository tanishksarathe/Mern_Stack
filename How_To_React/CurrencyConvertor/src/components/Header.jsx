import React from 'react'
import { MdCurrencyBitcoin } from "react-icons/md";
import { BsCurrencyEuro } from "react-icons/bs";

const Header = () => {
  return (
   <>
    <div className='bg-blue-500 font-bold text-center text-3xl p-4 flex justify-center items-center'>
     <MdCurrencyBitcoin className='animate-bounce' />   Currency Convertor <BsCurrencyEuro className='animate-bounce'/>

    </div>
    
   </>
  )
}

export default Header
