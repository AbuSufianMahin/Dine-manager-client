import React, { useEffect, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

import './swiperStyle.css';

const CustomerReviews = () => {

    const [customerReviews, setCustomerReviews] = useState([]);

    useEffect(() => {
        fetch('/customerReviews.json').then(res => res.json()).then(data => setCustomerReviews(data));
    }, []);

    const groupedReviews = [];

    for (let i = 0; i < customerReviews.length; i += 3) {
        groupedReviews.push(customerReviews.slice(i, i + 3));
    }

    return (
        <section className="py-5 md:py-10 lg:py-20">
            <div className='w-11/12 md:w-10/12 max-w-7xl mx-auto'>
                <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">Customer Reviews</h1>
                <div className='p-8 lg:p-10 rounded-xl bg-base-200 mt-6 lg:mt-10'>
                    <Swiper
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                        slidesPerView={1}
                        spaceBetween={20}
                    >

                        {
                            groupedReviews.map((group, index) =>
                                <SwiperSlide key={index}>
                                    <div className="w-full mx-2 md:mx-3 lg:mx-4 grid gap-4 md:gap-6 lg:gap-8 grid-cols-1 md:grid-cols-3">
                                        {
                                            group.map((review, i) =>
                                                <div key={i} className="border-2 border-base-100 bg-base-300 rounded-xl p-5 lg:p-10 flex flex-col items-center">
                                                    <div>
                                                        <div className="avatar flex-col items-center justify-center gap-2 max-w-96">
                                                            <div className="ring w-24 rounded-full">
                                                                <img src={review.userPhotoURL} alt={`${review.username} avatar`} />
                                                            </div>
                                                            <h1 className="font-bold text-center">{review.username}</h1>
                                                        </div>
                                                    </div>
                                                    <div className="text-center space-y-3 p-2 md:p-5 lg:text-justify">
                                                        <div className="flex gap-2 items-center justify-center">
                                                            <img src="https://i.ibb.co/LzTkRQny/star.png" alt="star rating" />
                                                            <p className="text-lg">{review.rating}</p>
                                                        </div>
                                                        <p className="pb-5">{review.description}</p>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    </div>
                                </SwiperSlide>
                            )
                        }

                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default CustomerReviews;