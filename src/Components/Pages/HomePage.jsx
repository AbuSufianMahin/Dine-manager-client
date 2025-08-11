import React from 'react';
import HeroSection from '../HomePageLayout/HeroSection';
import TopFoodSection from '../HomePageLayout/TopFoodSection';

import WhyChooseUs from '../HomePageLayout/WhyChooseUs';
import CustomerReviews from '../HomePageLayout/CustomerReviews';
import FAQSection from '../HomePageLayout/FAQSection';

const HomePage = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <TopFoodSection></TopFoodSection>

            {/* static sections */}
            <WhyChooseUs></WhyChooseUs>
            <CustomerReviews></CustomerReviews>
            <FAQSection></FAQSection>
        </div>
    );
};

export default HomePage;