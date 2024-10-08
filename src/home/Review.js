import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import {FaStar} from 'react-icons/fa6'
import { Avatar } from "flowbite-react";
import propic from "../assets/images/p1.jfif"
import propic1 from "../assets/images/p2.jpg"
import propic2 from "../assets/images/p4.jpeg"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

//import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

function Review() {
  return (
    <div className='my-12 px-4 lg:px-24'>
        <h2 className='text-5xl font-bold text-center mb-10 leading-snug'>Our Customers</h2>
        <div>
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-ambar-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>

                </div>

                {/*text */}
                <div className='mt-7'>
                    <p className='mb-5'>Discover what our customers are saying about us! Our bookstore is praised for
                         its extensive collection of books that cater to every interest. Customers appreciate the
                          user-friendly website that makes browsing and purchasing books a seamless experience. 
                          </p>
                          <Avatar 
                          img={propic} 
                          alt="avatar of Jese" 
                          rounded 
                          className='w-10 mb-4'/>
                          <h5 className='text-lg font-medium '>Mark Ping</h5>
                          <p className='text-base'>CEO,ABC Company</p>
                          
                </div>
            </div>

        </SwiperSlide>

        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-ambar-500 flex gap-2'>
                    <FaStar/>
                
                    <FaStar/>
                    <FaStar/>

                </div>

                {/*text */}
                <div className='mt-7'>
                    <p className='mb-5'>Our customers love shopping with us! They appreciate our wide selection of books,
                         from classics to new releases, which cater to diverse tastes. 
                         They find our website easy to navigate, making it simple to discover
                          and purchase their favorite reads. </p>
                          <Avatar 
                          img={propic2} 
                          alt="avatar of Jese" 
                          rounded 
                          className='w-10 mb-4'/>
                          <h5 className='text-lg font-medium '>Mark Ping</h5>
                          <p className='text-base'>CEO,ABC Company</p>
                          
                </div>
            </div>/

        </SwiperSlide>

        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-ambar-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>

                </div>

                {/*text */}
                <div className='mt-7'>
                    <p className='mb-5'>They commend our efficient delivery service and the care taken in packaging their orders.
                         Join our community of book enthusiasts who value quality, variety, and excellent service. 
                        Start exploring today and see why readers trust us for their literary needs!</p>
                          <Avatar 
                          img={propic1} 
                          alt="avatar of Jese" 
                          rounded 
                          className='w-10 mb-4'/>
                          <h5 className='text-lg font-medium '>Mark Ping</h5>
                          <p className='text-base'>CEO,ABC Company</p>
                          
                </div>
            </div>

        </SwiperSlide>

        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-ambar-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>

                </div>

                {/*text */}
                <div className='mt-7'>
                    <p className='mb-5'></p>
                          <Avatar 
                          img={propic} 
                          alt="avatar of Jese" 
                          rounded 
                          className='w-10 mb-4'/>
                          <h5 className='text-lg font-medium '>Mark Ping</h5>
                          <p className='text-base'>CEO,ABC Company</p>
                          
                </div>
            </div>

        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-ambar-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>

                </div>

                {/*text */}
                <div className='mt-7'>
                    <p className='mb-5'>Our customers love shopping with us! They appreciate our wide selection of books, 
                        from classics to new releases, which cater to diverse tastes. They find our website easy to navigate,
                         making it simple to discover and purchase their favorite reads. </p>
                          <Avatar 
                          img={propic1} 
                          alt="avatar of Jese" 
                          rounded 
                          className='w-10 mb-4'/>
                          <h5 className='text-lg font-medium '>Mark Ping</h5>
                          <p className='text-base'>CEO,ABC Company</p>
                          
                </div>
            </div>

        </SwiperSlide>
        
        
        
        
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-ambar-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                   
                    <FaStar/>

                </div>

                {/*text */}
                <div className='mt-7'>
                    <p className='mb-5'> Bookstore is praised for its extensive collection of books that cater to every interest. 
                        Customers appreciate the user-friendly website that makes browsing and purchasing books a seamless experience.
                         They commend our efficient delivery service and the care taken in packaging their orders.
                          Join our community of book enthusiasts who value quality, variety, and excellent service. 
                          Start exploring today and see why readers trust us for their literary needs</p>
                          <Avatar 
                          img={propic} 
                          alt="avatar of Jese" 
                          rounded 
                          className='w-10 mb-4'/>
                          <h5 className='text-lg font-medium '>Mark Ping</h5>
                          <p className='text-base'>CEO,ABC Company</p>
                          
                </div>
            </div>

        </SwiperSlide>
        
        
        
        
        
        
        
        
        
       
      </Swiper>
        </div>
    </div>
  )
}

export default Review