import React, { Component } from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import BrandStrategy from '../assets/images/HeroImage_BrandStrategy.jpg';
import OurServices from '../assets/images/HeroImage_OurServices.jpg';

export default class Carousel extends Component {
    render() {
      return (
        <CarouselProvider
          naturalSlideWidth={600}
          naturalSlideHeight={480}
          totalSlides={2}
          orientation="vertical"
        >
        <Slider>
          <Slide index={0}>
            <img src={BrandStrategy} alt="Brand Strategy" />
          </Slide>
          <Slide index={1}>
            <img src={OurServices} alt="Our Strategy" />
          </Slide>
        </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
        </CarouselProvider>
      );
    }
  }