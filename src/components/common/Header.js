import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import './header.css';
import Menu from "./Menu";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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
                    <Link to="/"><h1 className="logo"></h1></Link>
                        <ul>
                            <li><Link to="/">단체선물</Link></li>
                            <li><Link to="/station">사업제휴</Link></li>
                            <li><Link to="/">오피스</Link></li>
                        </ul>
                    </div>
                    <div className="header_right">
                        <ul>
                            <li><Link to="/">상담받기</Link></li>
                            <li><Link to="/station">견적문의</Link></li>
                            <li><Link to="/">주문하기</Link></li>
                        </ul>
                        <div><button onClick={toggleMenu} className="menu_btn" type="button"></button></div>
                    </div>
                </div>
            </header>
            {isMenuOpen && <Menu toggleMenu={toggleMenu}></Menu>}
        </>
    );
}

export default Header;