import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./gift.css";
import PcImgSlider from "../common/PcImgSlider";
import LogoSlider from "../common/LogoSlider";

const Gift = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 850);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 850);
    };

    // Add event listener for resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobile]);

  useEffect(() => {
    // 페이지가 렌더링될 때 스크롤을 최상단으로
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const items = document.querySelectorAll(".item");

    const newObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            if (entry.target.classList.contains("aniDelayBox")) {
              const liElements = entry.target.querySelectorAll("li");
              liElements.forEach((li) => {
                li.classList.add("fade");
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
  }, []);
  return (
    <>
      <div id="b2b_gift">
        <div className="section1_box">
          <div className="section1">
            <div style={{ padding: "0 0 56.25% 0", position: "relative" }}>
              <video
                id="charlla-mp4-HSzSgFSivHX"
                playsInline
                preload="auto"
                disableRemotePlayback
                autoPlay
                muted
                loop
                style={{
                  background: "#000",
                  backgroundColor: "transparent",
                  objectFit: "contain",
                  border: "none",
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  top: "0",
                  left: "0",
                }}
              >
                <source
                  src="https://player-api.charlla.io/mp4/HSzSgFSivHX#t=0.001"
                  type="video/mp4"
                />
              </video>
            </div>
            <div className="section1_overlay"></div>
            <div className="section1_con">
              <div className="text_box item hidden">
                <p>우리 회사 창립기념일, 명절 선물이 걱정된다면?</p>
                <h3 className="item hidden fade-item">
                  '직장인 선호 선물 1위'
                  <br />
                  <span>풀리오</span>로 해결하세요!
                </h3>
              </div>
              <div className="img_box item hidden fade-item">
                <img
                  src="/imgs/gifts/leg3.png"
                  alt="풀리오 B2B 대표 제품"
                ></img>
                <img
                  src="/imgs/gifts/newmat.png"
                  alt="풀리오 B2B 대표 제품"
                ></img>
                <img
                  src="/imgs/gifts/neck3.png"
                  alt="풀리오 B2B 대표 제품"
                ></img>
                <span className="circle">
                  <p>직장인 선물</p>
                  <p>1위</p>
                </span>
              </div>
            </div>
          </div>
          <button type="button" className="main_btn item hidden">
            <Link to="https://www.pluuug.com/form/vBnigmtV6M" target="_blank">
              단체선물 <span>1분만에 상담받기</span>
            </Link>
            <div className="poi"></div>
          </button>
        </div>

        <div className="section2">
          <h3 className="item hidden">풀리오 단체선물</h3>
          <p className="item hidden">
            풀리오 단체선물 페이지는 기업체의 단체주문을 위해 전문적인 상담과
            합리적인 견적을 제공하는 <br />
            페이지입니다. 우리 회사에게 어울리는 상품군과 합리적인 견적을
            제공해드립니다.
          </p>
          <ul className="section2_con">
            <li className="item hidden fade-item">
              {isMobile && <h4>기업 EVENT</h4>}
              <div>
                <img src="/imgs/gifts/section2_1.jpg" alt=""></img>
              </div>
              {!isMobile && <h4>기업 EVENT</h4>}
              <p>
                풀리오 제품은 임직원들에게 감사와 축하의 마음을 전하는 완벽한
                선물입니다.
                <br />
                창립기념일, 근로자의 날, 명절, 가정의 달, 승진 선물 등 다양한
                사내 행사를 더욱 의미 있게 만들어줍니다.
                <br />
                풀리오로 직원들에게 행복과 성취감을 선사하세요.
              </p>
            </li>
            <li className="item hidden fade-item">
              {isMobile && <h4>기업 외부 행사</h4>}
              <div>
                <img src="/imgs/gifts/section2_2.jpg" alt=""></img>
              </div>
              {!isMobile && <h4>기업 외부 행사</h4>}
              <p>
                우리회사의 이미지를 결정하는 주주총회, 파트너사,투자사 선물에
                풀리오 제품은 어떠신가요?
                <br />
                중요한 순간을 더욱 특별하게 만들어주는 풀리오 제품으로 소중한
                관계가 더욱 깊어집니다.{" "}
              </p>
            </li>
            <li className="item hidden fade-item">
              {isMobile && <h4>고객 감사 선물</h4>}
              <div>
                <img src="/imgs/gifts/section2_3.jpg" alt=""></img>
              </div>
              {!isMobile && <h4>고객 감사 선물</h4>}
              <p>
                소중한 고객에게 감사의 마음을 전하는 제품을 찾고 계신가요?
                풀리오는 고객에게 감사의 마음을 전하는 이상적인 선물입니다. 고객
                감사 이벤트나 VIP고객에게 풀리오 제품을 선물함으로써, 관계가
                더욱 돈독해지고 재구매율이 높아집니다.
              </p>
            </li>
          </ul>
        </div>

        <div className="section4">
          <div className="section4_con">
            <p className="item hidden">
              <img src="/imgs/gifts/pulio_logo_trans.svg" alt=""></img>
              <span>Business</span>
            </p>
            <h3 className="item hidden">
              풀리오 <span>기업 구매 절차</span>
            </h3>
            <ul className="item hidden aniDelayBox">
              <li>
                <div>01</div>
                <p>주문 폼 제출</p>
              </li>
              <li>
                <div>02</div>
                <p>상담</p>
              </li>
              <li>
                <div>03</div>
                <p>견적서 제공</p>
              </li>
              <li>
                <div>04</div>
                <p>
                  결제 <span>카드 결제 및 세금계산서 발행</span>
                </p>
              </li>
              <li>
                <div>05</div>
                <p>제품 수령</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="section5">
          <p className="item hidden">Review</p>
          <h3 className="item hidden">
            우리 회사 만족도를 더 높일 수 있는
            <br />
            특별한 선물, <span>풀리오</span>
          </h3>
          <div className="section5_con item hidden fade-item">
            <PcImgSlider isMobile={isMobile}></PcImgSlider>
          </div>
        </div>

        <div className="section6 item hidden">
          <p className="item hidden">Customer</p>
          <h3 className="item hidden">
            <span>업계의 리더</span>들이 먼저 선택한 <span>풀리오</span>
          </h3>
          {!isMobile ? (
            <>
              <div className="item hidden fade-item">
                <LogoSlider
                  logoData={[
                    "/imgs/gifts/galleria.svg",
                    "/imgs/gifts/livart.svg",
                    "/imgs/gifts/airbusan.svg",
                    "/imgs/gifts/oddugi.svg",
                    "/imgs/gifts/bagen.svg",
                    "/imgs/gifts/shinhan.svg",
                    "/imgs/gifts/nanbang.svg",
                    "/imgs/gifts/sk_shieldus.png",
                    "/imgs/gifts/johnso.png",
                  ]}
                ></LogoSlider>
              </div>
              <div className="item hidden fade-item">
                <LogoSlider
                  logoData={[
                    "/imgs/gifts/TossBank.png",
                    "/imgs/gifts/hugel.png",
                    "/imgs/gifts/nonghub.svg",
                    "/imgs/gifts/hyundai.svg",
                    "/imgs/gifts/kyobo.svg",
                    "/imgs/gifts/lg_dis.png",
                    "/imgs/gifts/dior.png",
                    "/imgs/gifts/ewp.svg",
                    "/imgs/gifts/sk.svg",
                  ]}
                ></LogoSlider>
              </div>
            </>
          ) : (
            <>
              <div className="item hidden fade-item">
                <LogoSlider
                  logoData={[
                    "/imgs/gifts/galleria.svg",
                    "/imgs/gifts/livart.svg",
                    "/imgs/gifts/airbusan.svg",
                    "/imgs/gifts/oddugi.svg",
                    "/imgs/gifts/bagen.svg",
                    "/imgs/gifts/shinhan.svg",
                  ]}
                ></LogoSlider>
              </div>
              <div className="item hidden fade-item">
                <LogoSlider
                  logoData={[
                    "/imgs/gifts/TossBank.png",
                    "/imgs/gifts/hugel.png",
                    "/imgs/gifts/nonghub.svg",
                    "/imgs/gifts/hyundai.svg",
                    "/imgs/gifts/kyobo.svg",
                    "/imgs/gifts/lg_dis.png",
                  ]}
                ></LogoSlider>
              </div>
              <div className="item hidden fade-item">
                <LogoSlider
                  logoData={[
                    "/imgs/gifts/nanbang.svg",
                    "/imgs/gifts/sk_shieldus.png",
                    "/imgs/gifts/johnso.png",
                    "/imgs/gifts/dior.png",
                    "/imgs/gifts/ewp.svg",
                    "/imgs/gifts/sk.svg",
                  ]}
                ></LogoSlider>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Gift;
