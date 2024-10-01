import React from 'react'
import { Link } from 'react-router-dom'


function PromoBanner() {
  return (
    <div className='mt-16 py-12 bg-teal-100 px-4 lg:px-24'>
        <div className='flex flex-col md:flex-row  justify-between items-center gap-12'>
            <div className='md:w-1/2 '>
                <h2 className='text-3xl font-bold mb-6 leading-snug'>
                    2024 National Book Awards for Fiction Shortlist</h2>
                    <Link to='/shop' className=' block'>
                    <button className='bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300'>
    Get Promo</button></Link>
            </div>
            <div className='w-40 h-50 '>
            <dotlottie-player src="https://lottie.host/8aefc58b-b5ef-4ad1-b6be-23ac3637c6b7/UKrrchf3li.json"
             background="transparent"
              speed="1" 
               loop autoplay></dotlottie-player>

            </div>
        </div>
    </div>
  )
}

export default PromoBanner