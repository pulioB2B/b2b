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
                                <h3>"업무 중에도 쉴 수 있는 기회"</h3>
                                <p>매번 선물 고르기가 힘들었는데, 풀리오 제품을 선물하니 직원들이 정말 좋아했어요. 분기마다 선물하고 있습니다. 특히 실용적이고 피로 회복에 도움이 되어서, 모두가 만족하는 선물이었습니다. </p>
                                <div>
                                    <p>한OO | H사 HR팀</p>
                                    <ul>
                                        <img src="/imgs/gifts/star.svg" alt=""></img>
                                        <img src="/imgs/gifts/star.svg" alt=""></img>
                                        <img src="/imgs/gifts/star.svg" alt=""></img>
                                        <img src="/imgs/gifts/star.svg" alt=""></img>
                                        <img src="/imgs/gifts/star.svg" alt=""></img>
                                    </ul>
                                </div>
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
                                <h3>"직원들을 위한 작은 배려, 큰 효과"</h3>
                                <p>불만을 제기한 고객사에게 풀리오 안마제품을 선물한 후, 고객이 매우 만족하며 ‘회사의 세심한 배려에 감동했다’고 하셨어요. 제품이 실용적이고 고객의 마음을 풀 수 있는 좋은 방법이었습니다.</p>
                                <div>
                                    <p>이OO | A사 고객지원팀장</p>
                                    <ul>
                                        <img src="/imgs/gifts/star.svg" alt=""></img>
                                        <img src="/imgs/gifts/star.svg" alt=""></img>
                                        <img src="/imgs/gifts/star.svg" alt=""></img>
                                        <img src="/imgs/gifts/star.svg" alt=""></img>
                                        <img src="/imgs/gifts/star.svg" alt=""></img>
                                    </ul>
                                </div>
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
                                <h3>"고급스러우면서 실용적인 선물"</h3>
                                <p>투자사와의 중요한 만남을 기념하며 풀리오를 선물했어요. 제품을 받은 후 감사의 메시지가 계속 들어왔습니다. 고급스러우면서도 실용적인 선물이라서 긍정적인 반응을 얻을 수 있었습니다.</p>
                                <div>
                                    <p>김OO | B사 피플팀</p>
                                    <ul>
                                        <img src="/imgs/gifts/star.svg" alt=""></img>
                                        <img src="/imgs/gifts/star.svg" alt=""></img>
                                        <img src="/imgs/gifts/star.svg" alt=""></img>
                                        <img src="/imgs/gifts/star.svg" alt=""></img>
                                        <img src="/imgs/gifts/star.svg" alt=""></img>
                                    </ul>
                                </div>
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
                                <h3>"직장에서의 피로가 사라졌어요!"</h3>
                                <p>설날선물로 풀리오 안마제품을 선택했어요. 우리회사가 직원의 건강까지 생각한다는 이미지를 심어준 것같아 상부에서도 받은 직원들도 정말 기뻐했어요. </p>
                                <div>
                                    <p>김OO | K사 구매팀</p>
                                    <ul>
                                        <img src="/imgs/gifts/star.svg" alt=""></img>
                                        <img src="/imgs/gifts/star.svg" alt=""></img>
                                        <img src="/imgs/gifts/star.svg" alt=""></img>
                                        <img src="/imgs/gifts/star.svg" alt=""></img>
                                        <img src="/imgs/gifts/star.svg" alt=""></img>
                                    </ul>
                                </div>
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