import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LogoSlider = ({logoData}) => {
  const settings = {
    dots: false, // 하단 점 제거
    arrows:false,
    infinite: true, // 무한 슬라이드
    speed: 500, // 슬라이드 전환 속도
    slidesToShow: 5, // 한 번에 보이는 슬라이드 수
    slidesToScroll: 1, // 한 번에 넘어가는 슬라이드 수
    autoplay: true, // 자동 재생
    autoplaySpeed: 2000, // 자동 재생 속도
    pauseOnHover: false,
    draggable:false,
    responsive: [
      {
        breakpoint: 768, // 768px 이하일 때 설정
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // 480px 이하일 때 설정
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    
      <Slider {...settings}>
        {logoData.map((logo, index) => (
          <div key={index} style={{
            display: "flex",               // Flexbox 사용
            justifyContent: "center",      // 가로 중앙 정렬
            alignItems: "center",          // 세로 중앙 정렬
            height: "100px",               // 슬라이드 높이
            padding: "0 10px",
          }}>
            <img
              src={logo}
              alt={`Logo ${index + 1}`}
              style={{
                maxWidth: "100%",            // 이미지 최대 너비 제한
                maxHeight: "100%",           // 이미지 최대 높이 제한
                objectFit: "contain", 
                pointerEvents:'none'       // 이미지 비율 유지
              }}
            />
          </div>
        ))}
      </Slider>
  );
};

export default LogoSlider;