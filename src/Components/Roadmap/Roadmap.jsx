import React from 'react';
import Cards from './Cards';
import Launch from '../../Images/launch.png';
import Demo from '../../Images/demo.png';
import Market from '../../Images/marketing.png';
import Research from '../../Images/research.png';
import Circle from '../../Images/circle.png';
import Shape5 from '../../Images/shape-5.png';
import Shape3 from '../../Images/shape-3.png';
import Line from '../../Images/line.png';
import './Roadmap.css';

export default function Roadmap() {
    return (
        <div data-aos="fade-up-left" data-aos-duration="2000" className="roadmap-cont" id="roadmap">
            <img src={Circle} id="roadmap-circle"/>
            <img src={Shape3} id="roadmap-shape-3"/>
            <img src={Shape5} id="roadmap-shape-5"/>
            <div className="container-medium">
                <div className="main-title" style={{marginTop:"20px"}}>
                    Roadmap
                    <div className="bar">
                        <div className="bar-box"></div>
                    </div>
                </div>
                <div className="roadmap">
                    <img src={Line} className='roadmap-line'/>
                    <Cards title="Q4 2021" img={Research} para="Research Market and Product Development"/>
                    <Cards title="Q1 2022" img={Demo} para="Product Demo, Partnerships and Token Generation"/>
                    <Cards title="Q2 2022" img={Launch} para="Products Finalization for Global Reach, Marketing and Product Launch"/>
                    <Cards title="Q3 2022" img={Market} para="P2P Marketplace, Mobile App Development and Aggressive Marketing "/>
                </div>
            </div>
        </div>
    )
}
