import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './marketing.css';

const Marketing = () => {
    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);

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
    }, []);

    return (
        <>
            <div id="b2b_marketing">
                <div className="section1_box">
                    <div className="section1">
                        <div className="section1_overlay"></div>
                        <div className="section1_con">
                            <div className="item hidden"><img src="/imgs/logo_white.svg" alt="풀리오 로고"></img></div>
                            <h3 className="item hidden">마케팅 제휴 안내</h3>
                            <p className="item hidden fade-item"><span style={{whiteSpace:'nowrap'}}>풀리오는 협업, 제휴 프로모션 등 파트너사의</span><br />소중한 제안을 기다리고 있습니다.</p>
                        </div>
                    </div>
                    <button type="button" className="main_btn item hidden"><Link to="https://puliob2bsales.recatch.cc/workflows/ammynjdcis" target="_blank">마케팅 제휴 <span>1분만에 상담받기</span></Link><div className="poi"></div></button>
                </div>

                <div className="section2">
                    <div className="section2_con">
                        <p style={{ transform: isHovered1 ? 'scale(1.05)' : 'scale(1)' }} className="item hidden fade-item">풀리오와 콜라보를 통해 양사의 <span>홍보, 판매, 그리고<br />브랜드 이미지를 강화하며 시너지를 극대화</span>하세요.</p>
                        <div className="item hidden">
                            <span onMouseEnter={() => setIsHovered1(true)}
                                onMouseLeave={() => setIsHovered1(false)}><p>Collaboration</p><p>브랜드 협업</p></span>
                            <span onMouseEnter={() => setIsHovered2(true)}
                                onMouseLeave={() => setIsHovered2(false)}><p>Promotion</p><p>제휴 프로모션</p></span>
                        </div>
                        <p style={{ transform: isHovered2 ? 'scale(1.05)' : 'scale(1)' }} className="item hidden fade-item">제휴 프로모션을 통해 양사의 <span>고객에게 특별한 혜택을<br />제공하고, 효과적인 마케팅 성과를 창출</span>하세요.</p>
                    </div>
                </div>

                <div className="section3">
                    <div className="section3_con">
                        <p className='item hidden'><img src="/imgs/gifts/pulio_logo_trans.svg" alt=""></img><span>Business</span></p>
                        <h3 className='item hidden'>
                            제안 처리 <span>과정</span>
                        </h3>
                        <ul className="item hidden aniDelayBox">
                            <li>
                                <div>01</div>
                                <p>
                                    제휴 문의 등록
                                </p>
                            </li>
                            <li>
                                <div>02</div>
                                <p>
                                    제휴 내용 접수
                                </p>
                            </li>
                            <li>
                                <div>03</div>
                                <p>
                                    담당자 상세 검토
                                </p>
                            </li>
                            <li>
                                <div>04</div>
                                <p style={{ lineHeight: '32px' }}>
                                    이메일로 검토 결과 <br />회신
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="section4">
                    <div className="section4_con">
                        <p className="item hidden">Pulio Partners</p>
                        <h3 className='item hidden'>
                            풀리오 <span>파트너사</span>
                        </h3>
                        <div className="logo_box item hidden fade-item">
                            <ul>
                                <li><img src="/imgs/marketings/gravity.png" alt=""></img></li>
                                <li><img src="/imgs/marketings/hyatt.png" alt=""></img></li>
                                <li><img src="/imgs/marketings/tada.png" alt=""></img></li>
                            </ul>
                            <ul>
                                <li><img src="/imgs/marketings/voco.png" alt=""></img></li>
                                <li><img src="/imgs/marketings/odd.png" alt=""></img></li>
                                <li><img src="/imgs/marketings/hinaf.png" alt=""></img></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Marketing;