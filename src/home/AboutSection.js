import React from 'react'

function AboutSection() {
  return (
    
  
    <div >
    
        <h1 className='text-tertiary text-5xl font-bold mt-5 text-center'>
       About
            </h1>
           
  
    <div className=' justify-between flex flex-col md:flex-row  sm:w-full '>
        <div className='h-[70vh] md:w-1/2 sm:w-full '>
        <dotlottie-player src="https://lottie.host/4b6b1303-72a2-4d90-8732-0d8816c59c18/ayzp2O1Znw.json" 
        background="transparent" 
        speed="1" 
          autoplay></dotlottie-player>
        </div>
        <div className='  gap-6 md:w-1/2  mt-20 flex flex-col md:flex-row  sm:w-full'>
        <p className='text-black'>Welcome to BooksWorld, where every book tells a story and every 
                reader finds a new chapter to love. Our bookstore is a treasure trove 
                 of literary delights, offering a carefully curated selection that spans genres, cultures, 
                 and generations. From literary classics to contemporary bestsellers, each book on our shelves 
                 is chosen with care to inspire, entertain, and enlighten. Beyond our love for books, we are
                  dedicated to fostering a welcoming space where readers can connect, explore, and discover 
                  new perspectives. Whether you’re here to browse, attend an event, or simply immerse yourself 
                  in the joy of reading, BooksWorld invites you to join our story and make yours a part of ours."
                  </p>
         
                 
        </div>
        </div>

    </div>
   

  )
}

export default AboutSection