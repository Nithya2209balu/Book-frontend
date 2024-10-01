import React from 'react'
import { useLoaderData } from 'react-router-dom'

function SingleBook() {
    const {_id,bookTitle, imageURL ,bookDescription , bookPDFURL}=useLoaderData();
   return (
    <div className='mt-28 px-4 lg:px-24  flex flex-col md:flex-row  sm:w-full  gap-8 justify-center' >
        
        <img src={imageURL} alt='' className='h-96' />
        
   
    
    
      <div>
      <h2 className='font-bold '>{bookTitle}</h2>
    <h2 className='mt-5'>{bookDescription}</h2>
    <h2>{bookPDFURL}</h2>
        <p className='text-gray-600 mt-2'>Price: 400.00</p>
        {/* Replace with actual price if available */}
    <div className='gap-10 justify-between flex flex-col md:flex-row  sm:w-full'>
      
        <button
         
          className='bg-green-500  hover:bg-gray-600 text-white p-2 rounded-md mt-5 gap-5'
        >
          Order Now
        </button>
        <button
        
          className='bg-blue-500 hover:bg-gray-600 text-white p-2 rounded-md'
        >
          Add to Cart
        </button>
        </div>
        </div>
      </div>
    
  

  )
}

export default SingleBook