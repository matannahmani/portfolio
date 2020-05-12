import React, { useEffect, useState } from 'react'
import { Icon } from '@iconify/react';
import closeIcon from '@iconify/icons-jam/close';
import baselineArrowBackIos from '@iconify/icons-ic/baseline-arrow-back-ios';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import anime from 'animejs';
import adminSiteAlt3 from '@iconify/icons-dashicons/admin-site-alt3';

const Cardpop = (props) => {
    const [close,setClose] = useState(false);
    window.addEventListener('keydown', key => {if (key.isComposing || key.keyCode === 27) setClose(true)});
    useEffect(() => {
            anime({
                targets: '.cardpop',
                easing: 'easeInCirc',
                opacity: 1,
                duration: 400
            });
            if (close === true)
            {
                anime({
                  targets: '.cardpop',
                  easing: 'easeOutCirc',
                  opacity: 0,
                  duration: 400
                });
                setTimeout(() => props.unMount(),200)
            }
    },)
    const slides = props.img.map((img,index) => {
      return <Slide index={index}><img src={props.img[index]} alt=""/></Slide>
    });
    return (
    <div className="cardpop">
        <div className="imgcontroll">
        <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={props.img.length}
        infinite={true}
        isPlaying={true}
      >
        <Slider>
          {slides}
        </Slider>
        <ButtonBack className="navt"><Icon icon={baselineArrowBackIos} /></ButtonBack>
        <ButtonNext className="navt"><Icon icon={baselineArrowBackIos} /></ButtonNext>
      </CarouselProvider>
        </div>
        <div className="card-details">
          <h3>{props.name}</h3>
          <span>{props.done}</span>
          <span className="card-p">{props.descp}</span>
          <a href={props.site} target="_blank"><span className="show-site"><Icon id="#site-show" icon={adminSiteAlt3} /> VIEW SITE</span></a>
        </div>
        <Icon id='close' onClick={() => setClose(true)} icon={closeIcon} />
    </div>
    )
}
export default Cardpop