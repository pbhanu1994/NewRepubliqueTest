import React from 'react';
import DigitalBusinessStrategy from '../assets/images/Image_DigitalBusiness.jpg';
import '../styles/digitalBusiness.css';

const DigitalBusiness = () => {
    return (
        <div className="row">
            <div className="DigitalBusinessSection col col-lg-12 col-md-12 col-sm-12" style={{paddingRight: "0"}}>
                <img className="DigitalBusinessImage img-fluid" src={DigitalBusinessStrategy} alt="Digital Business Strategy" />
                <div>
                    <h1 className="DigitalBusinessHeader">Digital Business Strategy</h1>
                    <p className="DigitalBusinessParagraph">We work with many organisations to research and assess potential digital, mobile and new technology business models that can help them differentiate, create new revenues or reduce the cost of delivery.</p>
                    <p className="DigitalBusinessParagraph">Many organisations that approach us don't have the background, skill or know how to identify and asses how their organisation can take advantage of digital opportunities.</p>
                    <a href="#" className="DigitalBusinessLink"><span className="DigitalBusinessLinkText">view related work</span></a>
                </div>
            </div>
        </div>
    );
}
 
export default DigitalBusiness