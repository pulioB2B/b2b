import React, { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import './gift.css';
import ImgSlider from "../common/ImgSlider";
import PcImgSlider from "../common/PcImgSlider";

const Gift = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 850);
  const domRef1 = useRef(null);
  const domRef2 = useRef(null);
  const domRef3 = useRef(null);
  const sliderRef = useRef(null);
  const btnNextRef = useRef(null);

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
            if (entry.target.classList.contains('aniDelayBox')) {
              const liElements = entry.target.querySelectorAll('li');
              liElements.forEach((li) => {
                li.classList.add('fade');
              });
            }
          } 
        });
      },
      { threshold: 0.5 } // 요소가 10% 보이면 트리거
    );

    items.forEach((item) => newObserver.observe(item));

    return () => {
      items.forEach((item) => newObserver.unobserve(item));
    };
  }, [isMobile]);

  const handleImagLoad = () => {
    domRef1.current.style.background = '#000';
    domRef2.current.style.background = '#140335';
    domRef3.current.style.background = '#140335';
    domRef3.current.style.paddingBottom = '75px';
    sliderRef.current.style.background = '#140335';
    btnNextRef.current.style.display = 'block';
  }

  return (
    <>
      {!isMobile ? (
        <div id="b2b_gift">
          <div className="section1_box">
            <div className="section1">
              <div style={{ padding: '0 0 56.25% 0', position: 'relative' }}><video id="charlla-mp4-HSzSgFSivHX" playsInline preload="auto" disableRemotePlayback autoPlay muted loop style={{ background: '#000', backgroundColor: 'transparent', objectFit: 'contain', border: 'none', width: '100%', height: '100%', position: 'absolute', top: '0', left: '0' }}><source src="https://player-api.charlla.io/mp4/HSzSgFSivHX#t=0.001" type="video/mp4" /></video></div>
              <div className="section1_overlay"></div>
              <div className="section1_con">
                <div className="text_box item hidden">
                  <p>우리 회사 창립기념일, 명절 선물이 걱정된다면?</p>
                  <h3 className="item hidden fade-item">'직장인 선호 선물 1위'<br /><span>풀리오</span>로 해결하세요!</h3>
                </div>
                <div className="img_box item hidden fade-item">
                  <img src="/imgs/gifts/v3_main.png" alt="풀리오 B2B 대표 제품"></img>
                  <img src="/imgs/gifts/matt_main.png" alt="풀리오 B2B 대표 제품"></img>
                  <img src="/imgs/gifts/v2_main.png" alt="풀리오 B2B 대표 제품"></img>
                  <span className="circle"><p>직장인 선물</p><p>1위</p></span>
                </div>
              </div>
            </div>
            <button type="button" className="main_btn item hidden"><Link to="https://puliob2bsales.recatch.cc/workflows/daboqndouz" target="_blank">단체선물 <span>1분만에 상담받기</span></Link><div className="poi"></div></button>
          </div>

          <div className="section2">
            <div className="section2_con item hidden">
              <div className="text_box">
                <h3>풀리오 단체선물</h3>
                <p>풀리오 단체선물 페이지는 기업체를 위해 전문적인 상담과 합리적인 견적을<br />제공하는 페이지입니다.</p>
                <p>우리 회사에게 어울리는 상품군과 합리적인 견적을 제공해드립니다.<br />주문폼 접수해주시면 신속하게 안내 드리도록 하겠습니다.</p>
                <button className="item hidden fade-item" type="button"><Link to="https://puliob2bsales.recatch.cc/workflows/daboqndouz" target="_blank">1분만에 상담받기 &gt;</Link></button>
              </div>
              <div className="img_box">
                <img src="/imgs/gifts/gift_section2.jpg" alt=""></img>
                <div>Pulio Gift</div>
              </div>
            </div>
          </div>

          <div className="section3">
            <div className="section3_con">
              <p className='item hidden'><img src="/imgs/gifts/pulio_logo_trans.svg" alt=""></img><span>Business</span></p>
              <h3 className='item hidden'>
                풀리오 <span>기업 구매 절차</span>
              </h3>
              <ul className="item hidden aniDelayBox">
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

          <div className="section4">
            <p className="item hidden">Review</p>
            <h3 className="item hidden">우리 회사 만족도를 더 높일 수 있는<br />특별한 선물, <span>풀리오</span></h3>
            <div className="section4_con item hidden fade-item">
              <PcImgSlider></PcImgSlider>
            </div>
          </div>

          <div className="section5">
            <div className="section5_con item hidden">
              <div className="box">
                <p>풀리오 공식 홈페이지</p>
                <button type="button"><Link to="https://puliodays.com/" target="_blank">바로가기 &gt;</Link></button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div id="mo_b2_gift">
            <div className="contents_imgBox mainBg"><img alt="" src="/imgs/gifts/01_1.gif" onLoad={handleImagLoad}></img></div>
            <div className="contents_imgBox"><img alt="" src="/imgs/gifts/03.jpg"></img></div>
            <div ref={domRef1}><div className="contents_imgBox item hidden"><img alt="" src="/imgs/gifts/04-effect.jpg"></img></div></div>
            <div className="contents_imgBox item hidden"><img alt="" src="/imgs/gifts/05-effect.jpg"></img></div>
            <div className="contents_imgBox item hidden"><img alt="" src="/imgs/gifts/06-effect.jpg"></img></div>
            <div className="contents_imgBox"><img alt="" src="/imgs/gifts/07.jpg" loading="lazy"></img></div>
            <div ref={domRef2}><div className="contents_imgBox item hidden"><img alt="" src="/imgs/gifts/08-effect.jpg" loading="lazy"></img></div></div>
            <div className="contents_imgBox"><img alt="" src="/imgs/gifts/10_1.jpg" loading="lazy"></img></div>
            <div className="contents_imgBox"><img alt="" src="/imgs/gifts/10.jpg" loading="lazy"></img></div>
            <div ref={domRef3}><div className="contents_imgBox item hidden"><img alt="" src="/imgs/gifts/11-effect_1.jpg" loading="lazy"></img></div></div>
            <div className="slider_box" ref={sliderRef}>
              <ImgSlider btnNextRef={btnNextRef}></ImgSlider>
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