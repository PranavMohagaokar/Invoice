import React, { useState, useEffect } from 'react';
import DropDowns from './DropDowns';

const Currency_converter = () => {
    const [currencies, setCurrencies] = useState([]);
    const [Amount, setAmount] = useState(1);

    const [fromCurrency, setfromCurrency] = useState("USD")
    const [toCurrency, settoCurrency] = useState("INR")
    const [convertedAmt, setconvertedAmt] = useState(null)
    const [converting, setconverting] = useState(false)

    // Currencies -> https://api.frankfurter.app/currencies
    const fetchCurrencies = async () => {
        try {
            const res = await fetch("https://api.frankfurter.app/currencies");
            const data = await res.json();
            setCurrencies(Object.keys(data));
        } catch (error) {
            console.error("Error occur in fetching", error);
        }
    };

    useEffect(() => {
        fetchCurrencies();
    }, []);

    console.log(currencies);

    const convertCurrency=async ()=>{
        if(!Amount)return 
        setconverting(true);
        //logic
        try {
            const res = await fetch(`https://api.frankfurter.app/latest?amount=${Amount}&from=${fromCurrency}&to=${toCurrency}`);
            const data = await res.json();
            setconvertedAmt(data.rates[toCurrency]+" "+toCurrency)
            
        } catch (error) {
            console.error("Error occur in fetching", error);
        }
        finally{setconverting(false)}
    }
    

    //Conversion->hhtps://api.frankfurter.app/latest?amount=1&from=USD&to=INR
  return (
    <div className='max-w-xl mx-auto my-10 p-5 bg-white rounded-lg shadow-md'>
        <h2 className='mb-5 text-2xl font-semibold text-stone-700'>Currency Converter

        </h2>

        <div >
            <DropDowns currencies={currencies} currency={fromCurrency} setCurrency={setfromCurrency} title='From:'/>
    {/* swap button */}
            <DropDowns currencies={currencies} currency={toCurrency} setCurrency={settoCurrency} title='To:'/>
        </div>

        <div className='mt-4'>
            <label htmlFor="amount" className='block text-sm font-medium text-amber-600'>Amount: </label>
            <input value={Amount} onChange={(e)=>setAmount(e.target.value)} type="number" className='w-full p-2 border border-sky-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 mt-1'  />
        </div>

        <div className='flex justify-end mt-6'>
            <button onClick={convertCurrency} className={`bg-black text-white rounded-md p-2 hover:bg-green-700 hover:text-black${converting ? "animate-pulse":""}`}>Convert</button>
        </div>
        {convertedAmt &&(
            <div className='mt-4 text-lg font-mono text-right text-cyan-600'>
            Converted Amount: {convertedAmt}
        </div>
        )}

        
      
    </div>
  )
}

export default Currency_converter
