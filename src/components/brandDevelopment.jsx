import React from 'react';
import BrandDevelopmentImage from '../assets/images/Image_BrandDevelopment.jpg';
import '../styles/brandDevelopment.css';

const BrandDevelopment = () => {
    return (
        <div className="BrandDevelopmentSection col col-lg-12 col-md-12 col-sm-6">
            <div className="col col-lg-6 col-md-6">
                <h1 className="BrandDevelopmentHeader">Brand <br />Development</h1>
                <p className="BrandDevelopmentParagraph">Our brand development process merges traditional brand planning <br />methodologies with a new world digital approach to developing <br />brand.</p>
                <p className="BrandDevelopmentParagraph">Our process focuses on developing a brands position in market, <br />tone or voice, personality and comrnunication platforrn.</p>
                <a href="#" className="BrandDevelopmentLink"><span className="DigitalBusinessLinkText">view related work</span></a>
            </div>
            <img className="BrandDevelopmentImage col col-lg-6 col-md-6" src={BrandDevelopmentImage} alt="Brand Development" />
        </div>
    );
}
 
export default BrandDevelopment;