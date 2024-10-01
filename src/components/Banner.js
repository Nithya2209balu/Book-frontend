import React from 'react'
import BannerCard from '../home/BannerCard'

function Banner() {
  return (
    <div className='px-4 lg:px-24 bg-teal-100 flex items-center'>
        <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
            {/*left side */}
            <div className='md:w-1/2 space-y-8 h-full'>
                <h1 className='text-5xl font-bold leading-snug  text-black'>Buy and Sell Your Books
                    <span className='text-blue-700'> for the Best Prices</span></h1>
                <p className='md:w-4/5'>Welcome to Book World, where passion for books meets
                 convenience in online shopping. Founded with a love for literature and a commitment to 
                 exceptional service, we strive to offer book lovers a curated selection of titles across 
                 all genres. Our mission is to connect readers with their next great read effortlessly, 
                 providing a seamless browsing and purchasing experience. Whether you’re a lifelong bookworm 
                 or exploring new interests, Book World is your destination for quality books,
                  reliable service, and a community that celebrates the joy of reading. Join us in discovering
                   endless stories waiting to be explored.
                </p>
                      <div>
                        <input type="s" name="search" id="search" placeholder='search a book'
                         className='py-2 px-2  rounded-s-sm outline-none'/>
                         <button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black 
                         transition-all ease-in duration-200'>Search</button>
                      </div>
            </div>

             {/*left side */}
             <div >
              <BannerCard></BannerCard>
             
             </div>
        </div>
    </div>
  )
}

export default Banner