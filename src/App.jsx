import React from 'react'
import Currency_converter from './Components/Currency_converter'

const App = () => {
  return (
    <div className='min-h-screen bg-slate-500 flex flex-col items-center justify-center'>
      {/* give height of 100 viewport */}
      <Currency_converter/>
    </div>
  )
}

export default App
