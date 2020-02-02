import React from 'react';
import Carousel from './carousel';
import DigitalBusiness from './digitalBusinessStrategy';
import BrandDevelopment from './brandDevelopment';
import NewsLetter from './newsletter';
import Footer from './footer';

const Home = () => {
    return ( 
        <div>
            <Carousel />
            <DigitalBusiness />
            <BrandDevelopment />
            <NewsLetter />
            <Footer />
        </div> 
    );
}
 
export default Home;