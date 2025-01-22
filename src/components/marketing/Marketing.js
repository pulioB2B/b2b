import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import './marketing.css';

const Marketing = () => {
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
                            <p className="item hidden fade-item">풀리오는 협업, 제휴 프로모션 등 파트너사의 소중한<br />제안을 기다리고 있습니다.</p>
                        </div>
                    </div>
                    <button type="button" className="main_btn item hidden"><Link to="https://puliob2bsales.recatch.cc/workflows/ammynjdcis" target="_blank">마케팅 제휴 <span>1분만에 상담받기</span></Link><div className="poi"></div></button>
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
                                <li><img src="/imgs/marketings/voco.png" alt=""></img></li>
                                <li><img src="/imgs/marketings/odd.png" alt=""></img></li>
                                <li><img src="/imgs/marketings/hinaf.png" alt=""></img></li>
                            </ul>
                            <ul>
                                <li><img src="/imgs/marketings/gravity.png" alt=""></img></li>
                                <li><img src="/imgs/marketings/tada.png" alt=""></img></li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Marketing;