import React from 'react';
import HeroSection from '../HomePageLayout/HeroSection';
import TopFoodSection from '../HomePageLayout/TopFoodSection';

import WhyChooseUs from '../HomePageLayout/WhyChooseUs';
import CustomerReviews from '../HomePageLayout/CustomerReviews';

const HomePage = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <TopFoodSection></TopFoodSection>

            {/* static sections */}
            <WhyChooseUs></WhyChooseUs>
            <CustomerReviews></CustomerReviews>
        </div>
    );
};

export default HomePage;