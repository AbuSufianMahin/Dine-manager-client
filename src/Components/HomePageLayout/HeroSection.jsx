import React from 'react';
import { Link } from 'react-router';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const HeroSection = () => {
    return (
        <section className='py-10 lg:py-20 bg-[#211F1F]'>
            <div className='flex flex-col-reverse md:flex-row gap-5 lg:gap-10 rounded-lg items-center justify-between mx-auto w-11/12 md:w-10/12'>
                <div className='text-center md:text-start lg:py-10 mt-10 text-white'>
                    <h1 className='text-4xl lg:text-6xl font-semibold'>The Taste that make you feel awesome </h1>
                    <p className='my-5 lg:text-lg'>Experience mouthwatering flavors crafted with care. From the first bite to the last, every dish is made to delight your senses and leave you craving more.</p>
                    <Link to='/food-details'><button className='btn btn-accent text-white'>Explore Our Menu</button></Link>
                </div>
                <div className='md:mt-5 w-11/12 md:w-1/2'>
                    <Swiper
                        slidesPerView={1}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        centeredSlides={true}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}

                        // navigation={true}
                        modules={[Autoplay, Navigation, Pagination]}
                        className="mySwiper rounded-lg"
                    >
                        <SwiperSlide>
                            <img src='https://i.ibb.co/svPkhp2M/women-chef.jpg' alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src='https://i.ibb.co/Vd2tVhX/closeup-chef-cooking.jpg' alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src='https://i.ibb.co/DfdqSV3p/salad-cooking.jpg' alt="" />
                        </SwiperSlide>

                    </Swiper>
                </div>
            </div>
        </section>

    );
};

export default HeroSection;