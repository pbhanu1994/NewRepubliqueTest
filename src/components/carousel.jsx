import React, { Component } from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import BrandStrategy from '../assets/images/HeroImage_BrandStrategy.jpg';
import OurServices from '../assets/images/HeroImage_OurServices.jpg';
import 'pure-react-carousel/dist/react-carousel.es.css';

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
                    <img src={BrandStrategy} alt="Brand Strategy" />
                </Slide>
                <Slide index={1}>
                    <img src={OurServices} alt="Our Strategy" />
                </Slide>
            </Slider>
            <ButtonBack style={{display: "none"}}>Back</ButtonBack>
            <ButtonNext style={{display: "none"}}>Next</ButtonNext>
            </CarouselProvider>
        </React.Fragment>
      );
    }
  }