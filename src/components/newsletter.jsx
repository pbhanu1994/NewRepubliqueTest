import React from 'react';
import '../styles/newsletter.css';

const NewsLetter = () => {
    return ( 
        <div className="NewsLetterSection col col-lg-12 col-md-12 col-sm-12" style={{paddingRight: "0"}}>
            <div className="NewsLetterContent">
                <h1 className="NewsLetterHeader">Stay in touch</h1>
                <p className="NewsLetterParagraph">Each month we release a newsletter on how we do what we <br />do. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <input className="form-control" style={{width: "30%", padding: "20px", margin: "auto", fontSize: "12px"}} type="text" placeholder="Enter your email address..."></input>
                <a href="#" className="NewsLetterLink"><span className="NewsLetterLinkText">sign up to our newsletter</span></a>
            </div>
        </div>
    );
}
 
export default NewsLetter;