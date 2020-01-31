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
        <React.Fragment>
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
                            <img className="ListIcon" src={StrategyIcon} alt="Strategy Icon"/>
                            <span className="ListIconLabel">branding, <br />brand strategy</span>
                        </li>
                        <li className="IconListItem">
                            <img className="ListIcon"src={CROIcon} alt="CRO Icon"/>
                            <span className="ListIconLabel">conversion <br />rate optimisations</span>
                        </li>
                        <li className="IconListItem">
                            <img className="ListIcon"src={UXDesignIcon} alt="UXDesign Icon"/>
                            <span className="ListIconLabel">ux, design, <br />development</span>
                        </li>
                    </ul>
                    <img src={OurServices} alt="Our Services" />
                </Slide>
                <Slide index={1}>
                    <h1 className="CarouselHeader">Brand Strategy</h1>
                    <p style={{paddingBottom: "260px"}} className="CarouselParagraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Sunt placeat fugit, voluptate id possimus error corporis soluta <br />reiciendis tenetur eum ipsam beatae quod ipsum laborum, <br />repellendus laboriosam. Velit, nesciunt libero?</p>
                    <a href="#" className="BrandStrategyLink"><span className="BrandStrategyLinkText">view related link</span></a>
                    <img src={BrandStrategy} alt="Brand Strategy" />
                </Slide>
            </Slider>
            <ButtonBack style={{display: "none"}}>Back</ButtonBack>
            <ButtonNext style={{display: "none"}}>Next</ButtonNext>
            </CarouselProvider>
        </React.Fragment>
      );
    }
  }