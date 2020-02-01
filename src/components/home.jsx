import React from 'react';
import Carousel from './carousel';
import DigitalBusiness from './digitalBusinessStrategy';
import BrandDevelopment from './brandDevelopment';

const Home = () => {
    return ( 
        <div>
            <Carousel />
            <DigitalBusiness />
            <BrandDevelopment />
        </div> 
    );
}
 
export default Home;