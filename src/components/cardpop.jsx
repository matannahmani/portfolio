import React, { useEffect, useState } from 'react'
import { Icon, InlineIcon } from '@iconify/react';
import closeIcon from '@iconify/icons-jam/close';
import baselineArrowBackIos from '@iconify/icons-ic/baseline-arrow-back-ios';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import anime from 'animejs';
const Cardpop = (props) => {
    const [close,setClose] = useState(false);
    useEffect(() => {
            anime({
                targets: '.cardpop',
                scale: [0.5,1],
                easing: 'easeInOutSine',
                translateX: ['-90%',"-50%"],
                opacity: [0,1],
                duration: 400
            });
            if (close === true)
            {
                anime({
                    targets: '.cardpop',
                    scale: [1,0],
                    translateX: ["-50%",'-90%'],
                    easing: 'easeInOutSine',
                    duration: 200
                });
                setTimeout(() => props.unMount(),200)
            }
    },)
    return (
    <div className="cardpop">
        <div className="imgcontroll">
        <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={2}
        infinite={true}
        isPlaying={true}
      >
        <Slider>
          <Slide index={0}><img src={props.img} alt=""/></Slide>
          <Slide index={1}><img src="https://encdn.ldmnq.com/ldstore/en/Cy4NmE-1577354491996.jpg" alt=""/></Slide>
        </Slider>
        <ButtonBack className="navt"><Icon icon={baselineArrowBackIos} /></ButtonBack>
        <ButtonNext className="navt"><Icon icon={baselineArrowBackIos} /></ButtonNext>
      </CarouselProvider>
        </div>
        <Icon id='close' onClick={() => setClose(true)} icon={closeIcon} />
    </div>
    )
}
export default Cardpop