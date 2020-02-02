import React from 'react';
import Button from './common/button';
import BrandDevelopmentImage from '../assets/images/Image_BrandDevelopment.jpg';
import '../styles/brandDevelopment.css';

const BrandDevelopment = () => {
    return (
        <div className="BrandDevelopmentSection">
            <div className="BrandDevelopmentItems">
                <h1 className="BrandDevelopmentHeader">Brand Development</h1>
                <p className="BrandDevelopmentParagraph">Our brand development process merges traditional brand planning methodologies with a new world digital approach to developing brand.</p>
                <p className="BrandDevelopmentParagraph">Our process focuses on developing a brands position in market, tone or voice, personality and comrnunication platforrn.</p>
                <Button
                    linkClassName="BrandDevelopmentLink"
                    spanClassName="DigitalBusinessLinkText"
                    spanText="view related work"
                />
            </div>
            <div>
                <img className="BrandDevelopmentImage img-fluid" src={BrandDevelopmentImage} alt="Brand Development" />
            </div>
        </div>
    );
}
 
export default BrandDevelopment;