import React from 'react';
import BrandDevelopmentImage from '../assets/images/Image_BrandDevelopment.jpg';
import '../styles/brandDevelopment.css';

const BrandDevelopment = () => {
    return (
        <div className="BrandDevelopmentSection">
            <div className="">
                <h1 className="BrandDevelopmentHeader">Brand Development</h1>
                <p className="BrandDevelopmentParagraph">Our brand development process merges traditional brand planning methodologies with a new world digital approach to developing brand.</p>
                <p className="BrandDevelopmentParagraph">Our process focuses on developing a brands position in market, tone or voice, personality and comrnunication platforrn.</p>
                <a href="#" className="BrandDevelopmentLink"><span className="DigitalBusinessLinkText">view related work</span></a>
            </div>
            <div className="">
                <img className="BrandDevelopmentImage img-fluid" src={BrandDevelopmentImage} alt="Brand Development" />
            </div>
        </div>
    );
}
 
export default BrandDevelopment;