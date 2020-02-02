import React, { Component } from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import Button from './common/button';
import OurServices from '../assets/images/HeroImage_OurServices.jpg';
import BrandStrategy from '../assets/images/HeroImage_BrandStrategy.jpg';
import StrategyIcon from '../assets/icons/Icon_Strategy.png';
import CROIcon from '../assets/icons/Icon_CRO.png';
import UXDesignIcon from '../assets/icons/Icon_UXDesign.png';
import 'pure-react-carousel/dist/react-carousel.es.css';
import '../styles/carousel.css';

export default class Carousel extends Component {
    render() {
        const newRepubliqueWorkLink = "https://newrepublique.com/work/";
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
                        <h1 className="CarouselHeader">Our services</h1>
                        <p className="CarouselParagraph">The imaginative crafting of psychology, art, technology and
                        <br />
                        business to create beautiful ideas, products and services.</p>
                        <ul className="IconList">
                            <li>
                                <a href={newRepubliqueWorkLink} className="OurServicesLink" target="_blank" rel="noopener noreferrer">
                                    <img className="ListIcon" src={StrategyIcon} alt="Strategy Icon"/>
                                    <span className="ListIconLabel">branding, <br />brand strategy</span>
                                </a>
                            </li>
                            <li className="IconListItem">
                                <a href={newRepubliqueWorkLink} className="OurServicesLink" target="_blank" rel="noopener noreferrer">
                                    <img className="ListIcon"src={CROIcon} alt="CRO Icon"/>
                                    <span className="ListIconLabel">conversion <br />rate optimisations</span>
                                </a>
                            </li>
                            <li className="IconListItem">
                                <a href={newRepubliqueWorkLink} className="OurServicesLink" target="_blank" rel="noopener noreferrer">
                                    <img className="ListIcon"src={UXDesignIcon} alt="UXDesign Icon"/>
                                    <span className="ListIconLabel">ux, design, <br />development</span>
                                </a>
                            </li>
                        </ul>
                        <img src={OurServices} className="CarouselImage" alt="Our Services" />
                    </Slide>
                    <Slide index={1}>
                        <h1 className="CarouselHeader">Brand Strategy</h1>
                        <p style={{paddingBottom: "260px"}} className="CarouselParagraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Sunt placeat fugit, voluptate id possimus error corporis soluta <br />reiciendis tenetur eum ipsam beatae quod ipsum laborum, <br />repellendus laboriosam. Velit, nesciunt libero?</p>
                        <Button
                            linkClassName="BrandStrategyLink"
                            spanClassName="BrandStrategyLinkText"
                            spanText="view related work"
                        />
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