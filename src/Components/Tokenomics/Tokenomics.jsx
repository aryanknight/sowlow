import React from 'react';
import Chart from '../../Images/chart.png';
import './Tokenomics.css';

export default function Tokenomics() {
    return (
        <div className="features-cont" id="tokenomics">
            <div className="container-medium">
                <div className="main-title" style={{marginTop:"20px"}}>
                    Tokenomics
                    <div className="bar">
                        <div className="bar-box"></div>
                    </div>
                </div>
                <div className="tokenomics">
                    <img src={Chart} id="chart" />
                </div>
            </div>
        </div>
    )
}
