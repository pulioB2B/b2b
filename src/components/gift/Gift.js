import React, { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import './gift.css';
import ImgSlider from "../common/ImgSlider";

const Gift = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const domRef1 = useRef(null);
  const domRef2 = useRef(null);
  const domRef3 = useRef(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    // 페이지가 완전히 로드된 후 Footer 표시
    window.onload = () => {
      domRef1.current.style.background = '#000';
      domRef2.current.style.background = '#140335';
      domRef3.current.style.background = '#140335';
      domRef3.current.style.paddingBottom = '75px';
      sliderRef.current.style.background = '#140335';
    };
  }, []);

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
      { threshold: 0.2 } // 요소가 10% 보이면 트리거
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
            <div style={{ padding: '0 0 56.25% 0', position: 'relative' }}><video id="charlla-mp4-HSzSgFSivHX" playsInline preload="auto" disableRemotePlayback autoPlay muted loop style={{ background: '#000', backgroundColor: 'transparent', objectFit: 'contain', border: 'none', width: '100%', height: '100%', position: 'absolute', top: '0', left: '0' }}><source src="https://player-api.charlla.io/mp4/HSzSgFSivHX#t=0.001" type="video/mp4" /></video></div>
            <div className="section1_overlay"></div>
            <div className="section1_con">
              <div className="text_box item hidden">
                <p>우리 회사 창립기념일, 명절 선물이 걱정된다면?</p>
                <h3 className="item hidden fade-item">'직장인 선호 선물 1위'<br /><span>풀리오</span>로 해결하세요!</h3>
              </div>
              <div className="img_box item hidden"><img src="/imgs/image 9.png" alt="풀리오 B2B 대표 제품"></img></div>
            </div>
          </div>

          <div className="section2">
            <div className="section2_con item hidden">
              <button type="button">1분만에 상담받기</button>
              <p>풀리오 단체선물 페이지는 기업체를 위해 전문적인 상담과 합리적인 견적을<br/>제공하는 페이지입니다.<br/>우리 회사에게 어울리는 상품군과 합리적인 견적을 제공해드립니다.<br/>주문폼 접수해주시면 신속하게 안내 드리도록 하겠습니다.</p>
            </div>
          </div>

          <div className="section3">
            <div className="section3_con">
              <h3 className='item hidden'>
                풀리오 <span>기업 구매 절차</span>
              </h3>
              <ul className="item hidden fade-item">
                <li>
                  <div>01</div>
                  <p>
                    주문 폼 제출
                  </p>
                </li>
                <li>
                  <div>02</div>
                  <p>
                    상담
                  </p>
                </li>
                <li>
                  <div>03</div>
                  <p>
                    견적서 제공
                  </p>
                </li>
                <li>
                  <div>04</div>
                  <p>
                    결제 <span>카드 결제 및 세금계산서 발행</span>
                  </p>
                </li>
                <li>
                  <div>05</div>
                  <p>
                    제품 수령
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div id="mo_b2_gift">
            <div className="contents_imgBox mainBg"><img alt="" src="/imgs/gifts/01_1.gif"></img></div>
            <div className="contents_imgBox"><img alt="" src="/imgs/gifts/03.jpg"></img></div>
            <div className="contents_imgBox item hidden" ref={domRef1}><img alt="" src="/imgs/gifts/04-effect.jpg"></img></div>
            <div className="contents_imgBox item hidden"><img alt="" src="/imgs/gifts/05-effect.jpg"></img></div>
            <div className="contents_imgBox item hidden"><img alt="" src="/imgs/gifts/06-effect.jpg"></img></div>
            <div className="contents_imgBox"><img alt="" src="/imgs/gifts/07.jpg" loading="lazy"></img></div>
            <div className="contents_imgBox item hidden" ref={domRef2}><img alt="" src="/imgs/gifts/08-effect.jpg" loading="lazy"></img></div>
            <div className="contents_imgBox"><img alt="" src="/imgs/gifts/10_1.jpg" loading="lazy"></img></div>
            <div className="contents_imgBox"><img alt="" src="/imgs/gifts/10.jpg" loading="lazy"></img></div>
            <div className="contents_imgBox item hidden" ref={domRef3}><img alt="" src="/imgs/gifts/11-effect_1.jpg" loading="lazy"></img></div>
            <div className="slider_box" ref={sliderRef}>
              <ImgSlider></ImgSlider>
            </div>
            <div className="contents_imgBox"><img alt="" src="/imgs/gifts/13.jpg" loading="lazy"></img></div>
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