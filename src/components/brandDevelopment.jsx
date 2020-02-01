import React from 'react';
import BrandDevelopmentImage from '../assets/images/Image_BrandDevelopment.jpg';
import '../styles/brandDevelopment.css';

const BrandDevelopment = () => {
    return (
        <div className="BrandDevelopmentSection">
            <div>
                <h1 className="BrandDevelopmentHeader">Brand <br />Development</h1>
                <p className="BrandDevelopmentParagraph">Our brand development process merges traditional brand planning <br />methodologies with a new world digital approach to developing <br />brand.</p>
                <p className="BrandDevelopmentParagraph">Our process focuses on developing a brands position in market, <br />tone or voice, personality and comrnunication platforrn.</p>
                <a href="#" className="BrandDevelopmentLink"><span className="DigitalBusinessLinkText">view related work</span></a>
            </div>
            <img className="BrandDevelopmentImage" src={BrandDevelopmentImage} alt="Brand Development" />
        </div>
    );
}
 
export default BrandDevelopment;