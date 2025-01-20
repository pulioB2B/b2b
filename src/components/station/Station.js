import React, { useRef, useEffect } from 'react';
import './station.css';

const Station = () => {
  const zoomContainerRef = useRef(null);
  const imgRef = useRef(null);

  const throttle = (func, delay) => {
    let lastCall = 0;
    return function (...args) {
      const now = new Date().getTime();
      if (now - lastCall >= delay) {
        lastCall = now;
        func(...args);
      }
    };
  };

  const handleMouseMove = (e) => {
    const rect = zoomContainerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const xPercent = (x / rect.width) * 100;
    const yPercent = (y / rect.height) * 100;

    imgRef.current.style.transformOrigin = `${xPercent}% ${yPercent}%`;
    zoomContainerRef.current.style.zIndex = '4';
  };

  useEffect(() => {
    const throttledMouseMove = throttle(handleMouseMove, 100);

    const zoomContainer = zoomContainerRef.current;

    zoomContainer.addEventListener('mousemove', throttledMouseMove);
    zoomContainer.addEventListener('mouseleave', () => {
      imgRef.current.style.transformOrigin = 'center center';
      zoomContainer.style.zIndex = '1';
    });

    return () => {
      zoomContainer.removeEventListener('mousemove', throttledMouseMove);
    };
  }, []);

  return (
    <div id="b2b_office">
      <div className="main_bg section1">
        <div className="background_title">Pulio Station</div>
        <div className="text_box">
          <div className="main_text">
            <div className="title">
              <p>임직원 피로해소 자판기</p>
              <h2>풀리오 스테이션</h2>
            </div>
            <p className="sub_title">
              피로를 녹이는 한 순간,<br />당신 회사만의 특별한 복지!
            </p>
          </div>
          <div className="desc">
            <h3>Pulio Station</h3>
            <p>
              휴게공간이나 라운지 등 원하는 장소에 풀리오 스테이션을 설치하여 임직원들이 자유롭게 풀리오 제품을 이용할 수 있는 서비스입니다.
            </p>
          </div>
        </div>
      </div>

      <div className="section2">
        <div className="section2_box">
          <p>Pulio Business</p>
          <h3>
            풀리오 비즈니스 <span>단독 서비스</span>
          </h3>
          <ul>
            <li>
              <div>01</div>
              <p>
                첫 도입 <span>3개월간</span><br />
                <span>무상</span> 지원
              </p>
            </li>
            <li>
              <div>02</div>
              <p>
                기업 규모에 따라<br />
                <span>무상 컨설팅</span>
              </p>
            </li>
            <li>
              <div>03</div>
              <p>
                <span>관리, 배송비, 설치비</span><br />무료
              </p>
            </li>
            <li>
              <div>04</div>
              <p>
                <span>제품 A/S</span> 서비스<br />무료
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div className="section3">
        <div className="section3_box">
          <h3>
            임직원을 위한 더 나은 근로 환경을 고민 중이신가요?<br />
            <span>풀리오 스테이션이 그 해답</span>을 드립니다!
          </h3>
          <p>단순한 휴식을 넘어, 몸과 마음까지 케어하는 맞춤 복지</p>
          <ul>
            <li>
              <img src="/imgs/2.jpg" alt="효율적인 점심시간" />
              <div>효율적인 점심시간</div>
              <p>
                짧은 점심시간, 완벽한 리프레시로<br />오후를 시작하세요!<br />풀리오 스테이션으로 더 효율적인 휴식을<br />경험하세요.
              </p>
            </li>
            <li>
              <img src="/imgs/2.jpg" alt="야근 피로 해소" />
              <div>잦은 야근 피로 해소</div>
              <p>
                전날의 야근 피로, 풀리오 스테이션으로<br />말끔히 풀어드립니다.<br />지친 몸을 달래고 다시 에너지를<br />충전하세요!
              </p>
            </li>
            <li>
              <img src="/imgs/2.jpg" alt="리프레시" />
              <div>효율적인 점심시간</div>
              <p>
                머리를 혹사한 하루, 이제는 리프레시가<br />필요할 때!<br />풀리오 스테이션으로 머리부터 마음까지<br />가볍게!
              </p>
            </li>
            <li>
              <img src="/imgs/2.jpg" alt="피로감 해소" />
              <div>찌뿌등함과 피로감 해소</div>
              <p>
                하루 종일 의자에 앉아 뻐근한 몸, 풀리오<br />스테이션이 책임집니다.<br />딱 15분, 뻣뻣했던 몸에 활력을 더하세요!
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div className="section4">
        <div className="section4_box">
          <div className="bg_1">
            <div className="box">
              <p>휴게 시간에도,<br />일하는 중에도</p>
              <p>풀리오로 간편하게 피로를 풀어 주세요.</p>
            </div>
          </div>
          <div className="bg_2">
            <div className="box">
              <p>업무 효율은 UP,<br />피로는 DOWN</p>
              <p>
                단 15분의 힐링<br />지금, 임직원을 위한 새로운 복지를 시작해보세요.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="section5">
        <div className="section5_box">
          <h3>
            Pulio<br />Station
          </h3>
          <div className="station_desc_box">
            <div ref={zoomContainerRef} className="zoom-container" style={{zIndex:1}}>
              <img ref={imgRef} src="/imgs/누끼1.png" alt="풀리오 스테이션"/>
            </div>

            <div className="fullscreen-overlay"></div>

            <div
              className="desc_text-box"
              style={{ position: 'absolute', top: 90, width: 414, color: '#fff', textAlign: 'left' }}
            >
              <p
                className="desc_title"
                style={{
                  fontSize: 28,
                  fontWeight: 600,
                  lineHeight: '39px',
                  letterSpacing: '-0.56px',
                  paddingBottom: 12,
                  borderBottom: '1px solid rgba(255,255,255,0.5)',
                }}
              >
                외관, 내구성까지 갖춘<br />완벽한 디자인!
              </p>
              <p
                className="desc_sub"
                style={{
                  fontSize: 17,
                  fontWeight: 400,
                  lineHeight: '28px',
                  letterSpacing: '-0.34px',
                  margin: '16px 0 32px',
                }}
              >
                어떤 공간에도 조화로운<br />심플하면서도 세련된 디자인
              </p>
              <p
                className="desc_sub2"
                style={{
                  fontSize: 17,
                  fontWeight: 400,
                  lineHeight: '28px',
                  letterSpacing: '-0.34px',
                }}
              >
                어떤 공간에도 조화로롭게 어울리는 외관과<br />내구성까지 갖춘 풀리오 스테이션
              </p>
            </div>

            <div
              className="desc_text-box"
              style={{ position: 'absolute', top: 441, width: 414, color: '#fff', textAlign: 'left' }}
            >
              <p
                className="desc_title"
                style={{
                  fontSize: 28,
                  fontWeight: 600,
                  lineHeight: '39px',
                  letterSpacing: '-0.56px',
                  paddingBottom: 12,
                  borderBottom: '1px solid rgba(255,255,255,0.5)',
                }}
              >
                간편한 충전, 하나로 끝!
              </p>
              <p
                className="desc_sub"
                style={{
                  fontSize: 17,
                  fontWeight: 400,
                  lineHeight: '28px',
                  letterSpacing: '-0.34px',
                  marginTop: 16,
                }}
              >
                콘센트 하나로 다양한 제품을 충전할 수 있는<br />멀티형 충전 케이블
              </p>
            </div>

            <div
              className="desc_text-box"
              style={{ position: 'absolute', top: 715, left: 534, width: 349, color: '#fff', textAlign: 'left' }}
            >
              <p
                className="desc_title"
                style={{
                  fontSize: 28,
                  fontWeight: 600,
                  lineHeight: '39px',
                  letterSpacing: '-0.56px',
                  paddingBottom: 12,
                  borderBottom: '1px solid rgba(255,255,255,0.5)',
                }}
              >
                공간 활용 최적화!
              </p>
              <p
                className="desc_sub"
                style={{
                  fontSize: 17,
                  fontWeight: 400,
                  lineHeight: '28px',
                  letterSpacing: '-0.34px',
                  marginTop: 16,
                }}
              >
                확장성과 분리가 가능한 맞춤형 스테이션<br />공간 제약 없이, 필요에 따라 확장, 분리하여<br />다양한 환경에 완벽히 적응하는 풀리오 스테이션
              </p>
            </div>

            <div
              className="desc_text-box"
              style={{ position: 'absolute', top: 224, left: 1087, width: 274, color: '#fff', textAlign: 'left' }}
            >
              <p
                className="desc_title"
                style={{
                  fontSize: 28,
                  fontWeight: 600,
                  lineHeight: '39px',
                  letterSpacing: '-0.56px',
                  paddingBottom: 12,
                  borderBottom: '1px solid rgba(255,255,255,0.5)',
                }}
              >
                깔끔한 정리,<br />완벽한 관리!
              </p>
              <p
                className="desc_sub"
                style={{
                  fontSize: 17,
                  fontWeight: 400,
                  lineHeight: '28px',
                  letterSpacing: '-0.34px',
                  marginTop: 16,
                }}
              >
                제품을 안정적으로 고정하여 편리하게<br />사용하고 보관이 가능한 홀드 타입<br />제품을 사용하지 않을 때도 깔끔하게 정리할 수<br />있어 공간 활용도를 높힐 수 있어요.
              </p>
            </div>

            <div
              style={{ position: 'absolute', top: 596, overflow: 'hidden', width: 277, height: 277, borderRadius: '50%' }}
            >
              <img
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                src="/imgs/누끼3.png"
                alt="이미지 3"
              />
            </div>
            <div
              style={{ position: 'absolute', top: -94, left: 875, zIndex: 2, overflow: 'hidden', width: 277, height: 277, borderRadius: '50%' }}
            >
              <img
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                src="/imgs/누끼2.png"
                alt="이미지 2"
              />
            </div>
            <div
              style={{ position: 'absolute', top: 435, left: 872, overflow: 'hidden', width: 335, height: 609, zIndex: 2 }}
            >
              <img
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                src="/imgs/image (13) 1.png"
                alt="이미지 1"
              />
            </div>
          </div>
          <div className="qa">
            <div className="qa_title">
              <h3>QA</h3>
              <p>자주 묻는 질문</p>
            </div>
            <ul>
              <li>
                <p>Q. 원하는 제품으로만 구성이 가능한가요?</p>
                <p>네, 원하는 제품으로 구성이 가능합니다.</p>
              </li>
              <li>
                <p>Q. 기업 인원이 많을 경우 스테이션 추가가 가능한가요?</p>
                <p>네, 스테이션 옆에 마그넷이 있어 쉽게 확장과 분리가 가능합니다.</p>
              </li>
              <li>
                <p>Q. 한 스테이션에 몇 가지의 제품이 들어갈 수 있나요?</p>
                <p>
                  제품 수량에 따라 다르지만, 기본적으로 5가지 제품을 넣을 수 있습니다.<br />
                  [예시]<br />1번째 칸 : 풀리션 마사지부츠<br />2번째 칸 : 목 어깨 마사지기<br />3번째 칸 : 체어형 마사지기, 종아리 마사지기<br />4번째 칸 : 손 마사지기
                </p>
              </li>
              <li>
                <p>Q. 한 칸에 몇 개까지 넣을 수 있나요?</p>
                <p>
                  제품의 부피에 따라 다르지만 최대 수용 가능한 수량은 아래와 같습니다.<br />
                  종아리 마사지기, 손 마사지기, 목어깨 마사지기 → 최대 6set<br />
                  마사지 부츠 → 최대 3set<br />
                  체어형 마사지기 → 최대 5set
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="section6">
        <div className="section6_box">
          <p>풀리오 스테이션 맞춤형 추천 제품</p>
          <ul>
            <li>
              <img style={{ width: 276, height: 255 }} src="/imgs/image 9.png" alt="종아리 마사지기" />
              <h3>풀리오 종아리 마사지기 V3</h3>
              <p>오래 앉아 있어 다리가 자주 붓거나 뭉치는 분에게 추천 드려요</p>
            </li>
            <li>
              <img style={{ width: 276, height: 255 }} src="/imgs/image 9.png" alt="손 마사지기" />
              <h3>풀리오 손 마사지기</h3>
              <p>키보드, 마우스 사용으로 손목이 뻐근한 분에게 추천 드려요</p>
            </li>
            <li>
              <img
                style={{ width: 185, height: 231, marginTop: 24 }}
                src="/imgs/image 11.png"
                alt="체어 마사지기"
              />
              <h3>풀리오 체어 마사지기</h3>
              <p>장시간 앉아 있어 오후만 되면 등 허리가 뻐근한 분에게 추천 드려요</p>
            </li>
            <li>
              <img
                style={{ width: 227, height: 225, marginTop: 30 }}
                src="/imgs/image 12.png"
                alt="마사지부츠"
              />
              <h3>풀리오 마사지부츠 풀리션</h3>
              <p>장시간 서있거나 앉아 있어서 오후만 되면 발이 자주 붓고 아픈 분에게 추천드려요.</p>
            </li>
          </ul>
          <div className="free_exp">
            <div className="text_box">
              <h3>3개월 무상지원으로<br />지금 바로 경험해 보세요.</h3>
              <button type="button">
                지금 무료체험 신청하기<span style={{ fontSize: 24 }}> &gt;</span>
              </button>
            </div>
            <div className="img_box" style={{ position: 'relative' }}>
              <img
                style={{ position: 'relative', top: -30, marginRight: 295, height: 179 }}
                src="/imgs/image 15.png"
                alt="무료체험 이미지"
              />
              <img
                style={{ position: 'absolute', right: -110, top: -240, width: 481, height: 507 }}
                src="/imgs/99.png"
                alt="무료체"
               /> 
            </div>
          </div> 
        </div>      
    </div>
    </div>    
  );
};

export default Station;
