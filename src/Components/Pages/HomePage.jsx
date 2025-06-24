import React from 'react';
import HeroSection from '../HomePageLayout/HeroSection';
import TopFoodSection from '../HomePageLayout/TopFoodSection';

import WhyChooseUs from '../HomePageLayout/WhyChooseUs';

const HomePage = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <TopFoodSection></TopFoodSection>

            {/* static sections */}
            <WhyChooseUs></WhyChooseUs>
        </div>
    );
};

export default HomePage;