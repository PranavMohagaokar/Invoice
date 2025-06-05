import React from 'react'

const DropDowns = ({currencies,currency,setCurrency,favorites,handlefav,title=" "}) => {

  return (
    <div>
      <label htmlFor={title} className='block text-sm font-serif text-black'>{title}</label>

      <div><select value={currency} onChange={(e)=>setCurrency(e.target.value)} className='w-full p-2 border border-teal-300 rounded-md shadow-sm '>
        {currencies.map((currency)=>{
           return(<option value={currency} key={currency} >{currency}</option>);
           
           
        })}
        </select>
        </div>
    </div>
  )
}

export default DropDowns
