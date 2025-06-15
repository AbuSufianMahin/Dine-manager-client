
import React, { Suspense, useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import slides from '../../../src/assets/Photos/photoSlides';

const FoodGallery = () => {
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    const handleImageClick = (i) => {
        setIndex(i);
        setOpen(true);
    };

    return (
        <div className="py-5 md:py-10 lg:py-20 text-center w-11/12 md:w-10/12 mx-auto">
            <h1 className="text-center text-2xl md:text-4xl font-bold">A Feast for the Eyes</h1>
            <div className="mt-5 md:mt-10 lg:mt-15 columns-2 md:columns-2 lg:columns-3 space-y-2 gap-2 md:space-y-3 md:gap-3">
                {slides.map((image, i) => (

                    <div key={i} className="overflow-hidden border-2 rounded-xl h-fit break-inside-auto">
                        <img
                            src={image.src}
                            className="rounded-lg cursor-pointer hover:scale-105 transition-transform"
                            onClick={() => handleImageClick(i)}
                        />
                    </div>
                ))}
            </div>

            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={slides}
                index={index}
            />
        </div>
    );
};

export default FoodGallery;