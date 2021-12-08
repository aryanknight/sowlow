import React from 'react';
import LandingImg from '../../Images/sowlowlanding.png'
import "./Intro.css";

export default function Intro() {
    return (
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
        
    )
}
