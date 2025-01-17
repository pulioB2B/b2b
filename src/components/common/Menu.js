import React from "react";
import { Link } from 'react-router-dom';
import './menu.css';

const Menu = ({ toggleMenu }) => {
    return (
        <>
        <aside id="menu_bar">
            <button type="button" onClick={toggleMenu}>X</button>
            <ul>
                <li><Link to="/">단체선물</Link></li>
                <li><Link to="/station">사업제휴</Link></li>
                <li><Link to="/">오피스</Link></li>
            </ul>
            <ul>
                <li><Link to="/">상담받기</Link></li>
                <li><Link to="/station">견적문의</Link></li>
                <li><Link to="/">주문하기</Link></li>
            </ul>
        </aside>
        </>
    );
}

export default Menu;