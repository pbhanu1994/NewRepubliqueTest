import React from 'react';
import Carousel from './carousel';
import DigitalBusiness from './digitalBusinessStrategy';
import BrandDevelopment from './brandDevelopment';
import NewsLetter from './newsletter';

const Home = () => {
    return ( 
        <div>
            <Carousel />
            <DigitalBusiness />
            <BrandDevelopment />
            <NewsLetter />
        </div> 
    );
}
 
export default Home;