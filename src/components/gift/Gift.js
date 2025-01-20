import React from "react";
import { Link } from 'react-router-dom';
import './gift.css';
import ImgSlider from "../common/ImgSlider";

const Gift = () => {

    return (
        <>
            <div id="gift_wraps">
                <div className="contents_imgBox mainBg"><img alt="" src="/imgs/gifts/01_1.gif"></img></div>
                <div className="contents_imgBox"><img alt="" src="/imgs/gifts/03.jpg"></img></div>
                <div className="contents_imgBox item hidden"><img alt="" src="/imgs/gifts/04-effect.jpg"></img></div>
                <div className="contents_imgBox item hidden"><img alt="" src="/imgs/gifts/05-effect.jpg"></img></div>
                <div className="contents_imgBox item hidden"><img alt="" src="/imgs/gifts/06-effect.jpg"></img></div>
                <div className="contents_imgBox"><img alt="" src="/imgs/gifts/07.jpg"></img></div>
                <div style={{background:'#140335'}}><div className="contents_imgBox item hidden"><img alt="" src="/imgs/gifts/08-effect.jpg"></img></div></div>
                <div className="contents_imgBox"><img alt="" src="/imgs/gifts/10_1.jpg"></img></div>
                <div className="contents_imgBox"><img alt="" src="/imgs/gifts/10.jpg"></img></div>
                <div style={{background:'#140335'}}><div className="contents_imgBox item hidden" style={{background:'#140335', paddingBottom:'75px'}}><img alt="" src="/imgs/gifts/11-effect_1.jpg"></img></div></div>
                <div className="slider_box">        
                    <ImgSlider></ImgSlider>
                </div>
                <div className="contents_imgBox"><img alt="" src="/imgs/gifts/13.jpg"></img></div>
            </div>

            <div className="counsel_btn">
                <Link to="https://puliob2bsales.recatch.cc/workflows/daboqndouz">1분만에 상담받기 &gt;</Link>
            </div>
        </>
    );
}

export default Gift;