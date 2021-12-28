import React from 'react';
import Cards from './Card';
import Person from '../../Images/person.jpg';
import Ryan from '../../Images/Ryan.png';
import Sam from '../../Images/sam.png';
import Jonas from '../../Images/Jonas.png';
import Ivan from '../../Images/Ivan.png';
import './Team.css';

export default function Team() {
    return (
        <div className="team-cont" id="team">
            <div className="container-medium">
                <div className="main-title" style={{marginTop:"20px"}}>
                    Team
                </div>
                <div className="team">
                    <div className="team-1">
                        <div className="team-2">
                            <Cards title="Ryan" para="CEO" img={Ryan}/>
                            <Cards title="Jonas" para="CTO" img={Jonas}/>
                            <Cards title="Sam" para="COO" img={Sam}/>
                            <Cards title="Ivan" para="CMO" img={Ivan}/>
                        </div>
                        
                    </div>
                    {/* <div className="team-1">
                        <div className="team-2">
                            <Cards title="Steven Smith" para="Developer" img={Person}/>
                            <Cards title="Steven Smith" para="Developer" img={Person}/>
                        </div>
                    </div> */}
                    
                    
                </div>
            </div>
        </div>
    )
}
