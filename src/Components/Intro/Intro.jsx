import React from 'react';
import LandingImg from '../../Images/sowlowlanding.png';
import Shape1 from '../../Images/shape-1.png';
import Shape2 from '../../Images/shape-2.png';
import Shape3 from '../../Images/shape-3.png';
import Circle from '../../Images/circle.png';
import Cross from '../../Images/cross.png';
import "./Intro.css";

export default function Intro() {
    return (
        <div className="intro-cont">
            <img src={Circle} id="intro-circle"/>
            <img src={Shape1} id="intro-sha-1" />
            <img src={Shape2} id="intro-sha-2" />
            <img src={Shape3} id="intro-sha-3" />
            <img src={Shape1} id="intro-sha-4" />
            <img src={Cross} id="intro-cross" />
            <div className="container-medium">
                <div className="intro">
                <div className="intro-left">
                    <div style={{padding:'1rem',width:'100%'}}>
                        <div className="intro-head">
                            Grow you business startup system better
                        </div>
                        <div className="intro-text">
                            Our passion to work hard and deliver excellent results. It could solve the needs of your customers and develop innovation.
                        </div>
                        <button className="intro-button">
                            GET STARTED
                        </button>
                    </div>
                </div>
                <div className="intro-right">
                    <img src={LandingImg} id="landing-img"/>
                </div>
                </div>
            </div>
        </div>
        
    )
}
