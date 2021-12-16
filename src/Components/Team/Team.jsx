import React from 'react';
import Cards from './Card';
import Person from '../../Images/person.jpg';
import Adam from '../../Images/adam.png';
import Sam from '../../Images/sam.png';
import Mark from '../../Images/mark.png';
import John from '../../Images/john.png';
import './Team.css';

export default function Team() {
    return (
        <div className="team-cont" id="team">
            <div className="container-medium">
                <div className="main-title" style={{marginTop:"20px"}}>
                    Our Smart Team
                </div>
                <div className="team">
                    <div className="team-1">
                        <div className="team-2">
                            <Cards title="John" para="CEO" img={John}/>
                            <Cards title="Mark" para="CTO" img={Mark}/>
                            <Cards title="Sam" para="COO" img={Sam}/>
                            <Cards title="Adam" para="CMO" img={Adam}/>
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
