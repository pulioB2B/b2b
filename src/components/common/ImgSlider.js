import React, { useCallback, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './imgSlider.css';

const ImgSlider = () => {
    const slickRef = useRef(null);
    const settings = {
        dots: false,
        arrows:false,
        infinite: true, // 무한 스크롤
        speed: 300, // 슬라이드 속도
        slidesToShow: 1, // 한 번에 보여줄 슬라이드 수
        slidesToScroll: 1, // 한 번에 스크롤할 슬라이드 수
        variableWidth: true,
    };
    const next = useCallback(() => slickRef.current.slickNext(), []);
    return (
        <>
        <ul className="review_slider" >
            
            <Slider {...settings} ref={slickRef}>
                <li><img alt="" src="/imgs/gifts/12-swipe1.jpg" loading="lazy"></img></li>
                <li><img alt="" src="/imgs/gifts/12-swipe2.jpg" loading="lazy"></img></li>
                <li><img alt="" src="/imgs/gifts/12-swipe3.jpg" loading="lazy"></img></li>
                <li><img alt="" src="/imgs/gifts/12-swipe4.jpg" loading="lazy"></img></li>
            </Slider>    
            <div className="btn_next" onClick={next}>&gt;</div>            
        </ul>
        </>
    );
}

export default ImgSlider;