import React, { useCallback, useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './imgSlider.css';

const PcImgSlider = () => {
    const slickRef = useRef(null);

    const [slidesToShow, setSlidesToShow] = useState(3); // 기본값 3으로 설정

    // 화면 크기 변경에 따른 슬라이드 개수 조정
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 1150) {
                setSlidesToShow(2); // 화면 너비가 1000px 이하일 경우
            } else {
                setSlidesToShow(3); // 기본값으로 3개로 설정
            }
        };

        handleResize(); // 초기 렌더링 시 실행
        window.addEventListener("resize", handleResize); // 화면 크기 변경 시마다 호출

        return () => {
            window.removeEventListener("resize", handleResize); // 컴포넌트 언마운트 시 이벤트 제거
        };
    }, []);

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        centerMode: true, // 센터 모드 활성화
        centerPadding: "0px", // 중앙 슬라이드의 양쪽 여백
    };

    const next = useCallback(() => slickRef.current.slickNext(), []);
    const prev = useCallback(() => slickRef.current.slickPrev(), []);

    return (
        <>
            <ul className="review_slider" >

                <Slider {...settings} ref={slickRef}>
                    <li className="slide-item">
                        <div className="box">
                            <div className="img_box">
                                <img alt="" src="/imgs/gifts/review1.jpg" loading="lazy"></img>
                                <div className="img_overlay"></div>
                            </div>
                            <div className="review_text">
                                <div>
                                    <h3>"업무 중에도 쉴 수 있는 기회"</h3>
                                    <ul>
                                        <img src="/imgs/gifts/star.svg" alt=""></img>
                                        <img src="/imgs/gifts/star.svg" alt=""></img>
                                        <img src="/imgs/gifts/star.svg" alt=""></img>
                                        <img src="/imgs/gifts/star.svg" alt=""></img>
                                        <img src="/imgs/gifts/star.svg" alt=""></img>
                                    </ul>
                                </div>
                                <p>총무팀에서 선물한 풀리오 마사지기 덕분에 업무 중 잠깐씩 휴식을 취할 수 있게 되었어요. 짧은 시간에도 효과적인 마사지로 목과 어깨의
                                    뻐근함을 풀어주니 집중력이 높아지고, 업무 효율도 상승한 것 같아요.</p>
                                <p>회사에서 이런 선물을 받다니 너무 기쁘고, 덕분에 일하는 데
                                    더 좋은 컨디션을 유지할 수 있어 감사합니다.</p>
                            </div>
                        </div>
                    </li>
                    <li className="slide-item">
                        <div className="box">
                        <div className="img_box">
                                <img alt="" src="/imgs/gifts/review1.jpg" loading="lazy"></img>
                                <div className="img_overlay"></div>
                            </div>
                            <div className="review_text">
                                <div>
                                    <h3>"업무 중에도 쉴 수 있는 기회"</h3>
                                    <ul>
                                        <img src="/imgs/gifts/star.svg" alt=""></img>
                                        <img src="/imgs/gifts/star.svg" alt=""></img>
                                        <img src="/imgs/gifts/star.svg" alt=""></img>
                                        <img src="/imgs/gifts/star.svg" alt=""></img>
                                        <img src="/imgs/gifts/star.svg" alt=""></img>
                                    </ul>
                                </div>
                                <p>총무팀에서 선물한 풀리오 마사지기 덕분에 업무 중 잠깐씩 휴식을 취할 수 있게 되었어요. 짧은 시간에도 효과적인 마사지로 목과 어깨의
                                    뻐근함을 풀어주니 집중력이 높아지고, 업무 효율도 상승한 것 같아요.</p>
                                <p>회사에서 이런 선물을 받다니 너무 기쁘고, 덕분에 일하는 데
                                    더 좋은 컨디션을 유지할 수 있어 감사합니다.</p>
                            </div>
                        </div>
                    </li>
                    <li className="slide-item">
                        <div className="box">
                        <div className="img_box">
                                <img alt="" src="/imgs/gifts/review1.jpg" loading="lazy"></img>
                                <div className="img_overlay"></div>
                            </div>
                            <div className="review_text">
                                <div>
                                    <h3>"업무 중에도 쉴 수 있는 기회"</h3>
                                    <ul>
                                        <img src="/imgs/gifts/star.svg" alt=""></img>
                                        <img src="/imgs/gifts/star.svg" alt=""></img>
                                        <img src="/imgs/gifts/star.svg" alt=""></img>
                                        <img src="/imgs/gifts/star.svg" alt=""></img>
                                        <img src="/imgs/gifts/star.svg" alt=""></img>
                                    </ul>
                                </div>
                                <p>총무팀에서 선물한 풀리오 마사지기 덕분에 업무 중 잠깐씩 휴식을 취할 수 있게 되었어요. 짧은 시간에도 효과적인 마사지로 목과 어깨의
                                    뻐근함을 풀어주니 집중력이 높아지고, 업무 효율도 상승한 것 같아요.</p>
                                <p>회사에서 이런 선물을 받다니 너무 기쁘고, 덕분에 일하는 데
                                    더 좋은 컨디션을 유지할 수 있어 감사합니다.</p>
                            </div>
                        </div>
                    </li>
                    <li className="slide-item">
                        <div className="box">
                        <div className="img_box">
                                <img alt="" src="/imgs/gifts/review1.jpg" loading="lazy"></img>
                                <div className="img_overlay"></div>
                            </div>
                            <div className="review_text">
                                <div>
                                    <h3>"업무 중에도 쉴 수 있는 기회"</h3>
                                    <ul>
                                        <img src="/imgs/gifts/star.svg" alt=""></img>
                                        <img src="/imgs/gifts/star.svg" alt=""></img>
                                        <img src="/imgs/gifts/star.svg" alt=""></img>
                                        <img src="/imgs/gifts/star.svg" alt=""></img>
                                        <img src="/imgs/gifts/star.svg" alt=""></img>
                                    </ul>
                                </div>
                                <p>총무팀에서 선물한 풀리오 마사지기 덕분에 업무 중 잠깐씩 휴식을 취할 수 있게 되었어요. 짧은 시간에도 효과적인 마사지로 목과 어깨의
                                    뻐근함을 풀어주니 집중력이 높아지고, 업무 효율도 상승한 것 같아요.</p>
                                <p>회사에서 이런 선물을 받다니 너무 기쁘고, 덕분에 일하는 데
                                    더 좋은 컨디션을 유지할 수 있어 감사합니다.</p>
                            </div>
                        </div>
                    </li>
                </Slider>
                <div className="btn_prev" onClick={prev}><img src="/imgs/gifts/next.svg" alt=""></img></div>
                <div className="btn_next" onClick={next}><img src="/imgs/gifts/next.svg" alt=""></img></div>
            </ul>
        </>
    );
}

export default PcImgSlider;