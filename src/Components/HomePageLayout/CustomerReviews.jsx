import React, { useEffect, useState } from 'react';

const CustomerReviews = () => {

    const [customerReviews, setCustomerReviews] = useState([]);

    useEffect(() => {
        fetch('/customerReviews.json').then(res => res.json()).then(data => setCustomerReviews(data));
    }, []);

    const groupedReviews = [];

    for (let i = 0; i < customerReviews.length; i += 2) {
        groupedReviews.push(customerReviews.slice(i, i + 2));
    }

    const [activeButtonNumber, setActiveButtonNumber] = useState(1);


    return (
        <section className="py-5 md:py-10 lg:py-20">
            <div className='w-11/12 md:w-10/12 mx-auto'>
                <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">Customer Reviews</h1>
                <div className='p-8 lg:p-10 rounded-xl bg-base-200'>
                    <div className="carousel w-full">
                        {
                            groupedReviews.map((group, index) =>
                                <div key={index} id={`item${index + 1}`} className="carousel-item w-full mx-2 md:mx-3 lg:mx-4 grid gap-4 md:gap-6 lg:gap-8  grid-cols-1 md:grid-cols-2">

                                    {
                                        group.map((review, i) =>
                                            <div key={i} className="border-2 border-base-100 bg-base-300 rounded-xl p-5 lg:p-10 flex items-center lg:gap-10 flex-col lg:flex-row">
                                                <div>
                                                    <div className="avatar flex-col items-center justify-center gap-2 max-w-96">
                                                        <div className="ring w-24 rounded-full">
                                                            <img src={review.userPhotoURL} />
                                                        </div>
                                                        <h1 className="font-bold text-center">{review.username}</h1>
                                                    </div>
                                                </div>
                                                <div className="text-center space-y-3 p-2 md:p-5 lg:text-justify">
                                                    <div className="flex gap-2 items-center justify-center lg:justify-start">
                                                        <img src="https://i.ibb.co/LzTkRQny/star.png" alt="" />
                                                        <p className="text-lg">{review.rating}</p>
                                                    </div>

                                                    <p className="pb-5">{review.description}</p>

                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                            )}
                    </div>
                </div>
                <div className="flex w-full justify-center gap-2 py-2">
                    <a href="#item1" ><button className={`btn btn-xs ${activeButtonNumber === 1 && "bg-primary text-white"}`} onClick={() => setActiveButtonNumber(1)}>1</button></a>
                    <a href="#item2" ><button className={`btn btn-xs ${activeButtonNumber === 2 && "bg-primary text-white"}`} onClick={() => setActiveButtonNumber(2)}>2</button></a>
                    <a href="#item3" ><button className={`btn btn-xs ${activeButtonNumber === 3 && "bg-primary text-white"}`} onClick={() => setActiveButtonNumber(3)}>3</button></a>
                </div>
            </div>
        </section>
    );
};

export default CustomerReviews;