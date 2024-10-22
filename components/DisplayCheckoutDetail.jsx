import React from 'react'

const DisplayCheckoutDetail = () => {
  return (
    <div className='border h-full w-1/2 text-center'>
      <div>1-2</div>
      <div>
        <h1 className='text-xl font-bold'>Name:</h1>
        <h1 className='text-xl font-bold'>Category:</h1>
        <h1 className='text-xl font-bold'>Description:</h1>
        <h1 className='text-xl font-bold'>Quantity:</h1>
        <h1 className='text-xl font-bold'>Total Price you will recieve:</h1>
      </div>
      <div><button>NEXT</button></div>
    </div>
  )
}

export default DisplayCheckoutDetail