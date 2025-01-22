import React, { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';
import './header.css';
import Menu from "./Menu";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    }

    // 스크롤 이벤트를 감지하여 상태를 업데이트
    useEffect(() => {
        const handleScroll = () => {
        if (window.scrollY > 50) { // 스크롤이 50px 이상일 때
            setScrolled(true);
        } else {
            setScrolled(false);
        }
        };

        // 스크롤 이벤트 리스너 등록
        window.addEventListener("scroll", handleScroll);

        // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header className={`header ${scrolled ? 'scrolled' : ''}`}>
                <div className="header_inner">
                    <div className="header_left">
                    <Link to="/"><h1 className="logo">로고</h1></Link>
                        <ul>
                            <li className={location.pathname === "/" ? "active" : ""}><Link to="/">단체선물</Link></li>
                            <li className={location.pathname === "/station" ? "active" : ""}><Link to="/station">사업제휴</Link></li>
                            {/*<li><Link to="/station" className={location.pathname === "/station" ? "active" : ""}>오피스</Link></li>*/}
                        </ul>
                    </div>
                    <div className="header_right">
                        <ul>
                            <li><Link to={location.pathname === '/' ? "https://puliob2bsales.recatch.cc/workflows/daboqndouz" : 'https://puliob2bsales.recatch.cc/workflows/ammynjdcis'} target="_blank">상담받기</Link></li>
                            <li><Link to="https://puliodays.com/" target="_blank">풀리오 Shop</Link></li>
                        </ul>
                        {/*<div><button onClick={toggleMenu} className="menu_btn" type="button"></button></div>*/}
                    </div>
                </div>
            </header>
            {isMenuOpen && <Menu toggleMenu={toggleMenu}></Menu>}
        </>
    );
}

export default Header;