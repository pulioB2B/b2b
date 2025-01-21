import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import './gift.css';
import ImgSlider from "../common/ImgSlider";

const Gift = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 850);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const items = document.querySelectorAll(".item");

    const newObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.1 } // 요소가 10% 보이면 트리거
    );

    items.forEach((item) => newObserver.observe(item));

    return () => {
      items.forEach((item) => newObserver.unobserve(item));
    };
  }, [isMobile]);

  return (
    <>
      {!isMobile ? (
        <div id="b2b_gift">
          <div className="section1">
            <div style={{padding: '0 0 56.25% 0', position: 'relative'}}><video id="charlla-mp4-HSzSgFSivHX" playsInline preload="auto" disableRemotePlayback autoPlay muted loop  style={{background:'#000',backgroundColor:'transparent',objectFit:'contain',border:'none',width:'100%',height:'100%',position:'absolute',top:'0',left:'0'}}><source src="https://player-api.charlla.io/mp4/HSzSgFSivHX#t=0.001" type="video/mp4" /></video></div>
            <div className="section1_overlay"></div>
            <div className="section1_con">
              <div className="text_box item hidden">
                <p>우리 회사 창립기념일, 명절 선물이 걱정된다면?</p>
                <h3 className="item hidden fade-item">'직장인 선호 선물 1위'<br/><span>풀리오</span>로 해결하세요!</h3>
              </div>
              <div className="img_box item hidden"><img src="/imgs/image 9.png" alt="풀리오 B2B 대표 제품"></img></div>
            </div>
          </div>

          <div className="section2">
            <div className="section2_con">

            </div>
          </div>
        </div>
      ) : (
        <>
          <div id="mo_b2_gift">
            <div className="contents_imgBox mainBg"><img alt="" src="/imgs/gifts/01_1.gif"></img></div>
            <div className="contents_imgBox"><img alt="" src="/imgs/gifts/03.jpg"></img></div>
            <div className="contents_imgBox item hidden"><img alt="" src="/imgs/gifts/04-effect.jpg"></img></div>
            <div className="contents_imgBox item hidden"><img alt="" src="/imgs/gifts/05-effect.jpg"></img></div>
            <div className="contents_imgBox item hidden"><img alt="" src="/imgs/gifts/06-effect.jpg"></img></div>
            <div className="contents_imgBox"><img alt="" src="/imgs/gifts/07.jpg"></img></div>
            <div style={{ background: '#140335' }}><div className="contents_imgBox item hidden"><img alt="" src="/imgs/gifts/08-effect.jpg"></img></div></div>
            <div className="contents_imgBox"><img alt="" src="/imgs/gifts/10_1.jpg"></img></div>
            <div className="contents_imgBox"><img alt="" src="/imgs/gifts/10.jpg"></img></div>
            <div style={{ background: '#140335' }}><div className="contents_imgBox item hidden" style={{ background: '#140335', paddingBottom: '75px' }}><img alt="" src="/imgs/gifts/11-effect_1.jpg"></img></div></div>
            <div className="slider_box">
              <ImgSlider></ImgSlider>
            </div>
            <div className="contents_imgBox"><img alt="" src="/imgs/gifts/13.jpg"></img></div>
          </div>

          <div className="counsel_btn">
            <Link to="https://puliob2bsales.recatch.cc/workflows/daboqndouz" target="_blank">1분만에 상담받기 &gt;</Link>
          </div>
        </>
      )}

    </>
  );
}

export default Gift;