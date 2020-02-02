import React, { Component } from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import OurServices from '../assets/images/HeroImage_OurServices.jpg';
import BrandStrategy from '../assets/images/HeroImage_BrandStrategy.jpg';
import StrategyIcon from '../assets/icons/Icon_Strategy.png';
import CROIcon from '../assets/icons/Icon_CRO.png';
import UXDesignIcon from '../assets/icons/Icon_UXDesign.png';
import 'pure-react-carousel/dist/react-carousel.es.css';
import '../styles/carousel.css';

export default class Carousel extends Component {
    render() {
      return (
        <div className="row">
            <div className="col col-lg-12 col-md-12 col-sm-12" style={{paddingRight: "0"}}>
                <CarouselProvider
                    totalSlides={2}
                    orientation="vertical"
                    naturalSlideWidth={1280}
                    naturalSlideHeight={674}
                    isPlaying="true"
                    interval="3000"
                >
                <Slider>
                    <Slide index={0}>
                        <div>
                            <h1 className="CarouselHeader">Our services</h1>
                            <p className="CarouselParagraph">The imaginative crafting of psychology, art, technology and
                            <br />
                            business to create beautiful ideas, products and services.</p>
                            <ul className="IconList">
                                <li>
                                    <img className="ListIcon img-fluid" src={StrategyIcon} alt="Strategy Icon"/>
                                    <span>branding, <br />brand strategy</span>
                                </li>
                                <li className="IconListItem">
                                    <img className="ListIcon img-fluid"src={CROIcon} alt="CRO Icon"/>
                                    <span>conversion <br />rate optimisations</span>
                                </li>
                                <li className="IconListItem">
                                    <img className="ListIcon img-fluid"src={UXDesignIcon} alt="UXDesign Icon"/>
                                    <span>ux, design, <br />development</span>
                                </li>
                            </ul>
                        </div>
                        <img src={OurServices} className="CarouselImage" alt="Our Services" />
                    </Slide>
                    <Slide index={1}>
                        <div>
                            <h1 className="CarouselHeader">Brand Strategy</h1>
                            <p style={{paddingBottom: "260px"}} className="CarouselParagraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Sunt placeat fugit, voluptate id possimus error corporis soluta <br />reiciendis tenetur eum ipsam beatae quod ipsum laborum, <br />repellendus laboriosam. Velit, nesciunt libero?</p>
                            <a href="#" className="BrandStrategyLink"><span className="BrandStrategyLinkText">view related work</span></a>
                        </div>
                        <img src={BrandStrategy} className="CarouselImage" alt="Brand Strategy" />
                    </Slide>
                </Slider>
                <ButtonBack style={{display: "none"}}>Back</ButtonBack>
                <ButtonNext style={{display: "none"}}>Next</ButtonNext>
                </CarouselProvider>
            </div>
        </div>
      );
    }
  }