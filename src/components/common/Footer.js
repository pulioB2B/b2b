import React from "react";
import './footer.css';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="inner"> 
                <div className="cs">          
                    <div className="cs_left">
                        <ul>
                            <li className="title">
                                cs<span></span>
                            </li>
                        </ul>
                        <ul className="cs_info">
                            <img src="/imgs/cs_tell.svg" alt=""/>
                            <li className="tel">
                                1551-0879
                            </li>
                            <li className="tel_time">
                                AM 10:00 - PM 5:00 <br/><span>(주말 및 공휴일 휴무)</span>
                            </li>
                        </ul>  
                    </div>
                    <div className="cs_right_box">
                        <div className="company_pg">
                        <ul>
                            <li className="title">Company</li>
                        </ul>
                        <div className="inner2">
                            <div className="info">
                                <div className="info_left">
                                    <ul>
                                        <li>상호</li>
                                        <li>대표</li>
                                        <li>사업자등록번호</li>
                                        <li>통신판매업 신고</li>
                                        <li>개인정보관리책임자</li>
                                    </ul>
                                    <ul>
                                        <li>주식회사 풀리오</li>
                                        <li className="han">윤가람, 이홍직</li>
                                        <li>548-87-02137</li>
                                        <li>2024-서울마포-0591</li>
                                        <li>윤가람 (puliodays@gmail.com)</li>
                                    </ul>

                                </div>
                                <div className="info_right">
                                    <ul>
                                        <li>주소</li>
                                        <li>마케팅</li>
                                        <li>영업제휴/대량구매</li>
                                        <li>CS 고객지원</li>
                                        <li>해외영업/마케팅</li>
                                    </ul>
                                    <ul>
                                        <li>서울 마포구 마포대로 86 창강빌딩 2층 210호</li>
                                        <li>marketing365@pulio365.com</li>
                                        <li>sales@pulio365.com</li>
                                        <li>cs@pulio365.com</li>
                                        <li>global@pulio365.com</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        </div>

                        <div className="cs_right"> 
                        <ul>
                            <li className="title">Bank</li>
                        </ul>
                        <ul className="account">
                            <li className="info">
                                <ul className="info_left">
                                    <li>우리은행</li>
                                    <li>예금주</li>
                                </ul>
                                <ul className="info_right">
                                    <li>1005.104.581539</li>
                                    <li>(주)풀리오</li>
                                </ul>
                            </li>
                            <li><button className="btn_go_mall" type='button'><Link to="https://puliodays.com/" target="_blank"><img src="/imgs/logo_white.svg" alt="풀리오 로고"></img>자사몰 바로가기<img src="/imgs/Arrow 1.svg" alt=""></img></Link></button></li>
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;