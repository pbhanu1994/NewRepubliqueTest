import React from 'react';
import Button from './common/button';
import DigitalBusinessStrategy from '../assets/images/Image_DigitalBusiness.jpg';
import '../styles/digitalBusiness.css';

const DigitalBusiness = () => {
    return (
        <div className="row">
            <div className="DigitalBusinessSection col col-lg-12 col-md-12 col-sm-12" style={{paddingRight: "0"}}>
                <div>
                    <img className="DigitalBusinessImage img-fluid" src={DigitalBusinessStrategy} alt="Digital Business Strategy" />
                </div>
                <div className="DigitalBusinessItems">
                    <h1 className="DigitalBusinessHeader">Digital Business Strategy</h1>
                    <p className="DigitalBusinessParagraph">We work with many organisations to research and assess potential digital, mobile and new technology business models that can help them differentiate, create new revenues or reduce the cost of delivery.</p>
                    <p className="DigitalBusinessParagraph">Many organisations that approach us don't have the background, skill or know how to identify and asses how their organisation can take advantage of digital opportunities.</p>
                    <Button
                        linkClassName="DigitalBusinessLink"
                        spanClassName="DigitalBusinessLinkText"
                        spanText="view related work"
                    />
                </div>
            </div>
        </div>
    );
}
 
export default DigitalBusiness