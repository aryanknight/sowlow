import React from 'react';
import Cards from './Card';
import Person from '../../Images/person.jpg';
import './Team.css';

export default function Team() {
    return (
        <div className="team-cont">
            <div className="container-medium">
                <div className="main-title" style={{marginTop:"20px"}}>
                    Our Smart Team
                </div>
                <div className="team">
                    <div className="team-1">
                        <div className="team-2">
                            <Cards title="Steven Smith" para="Developer" img={Person}/>
                            <Cards title="Steven Smith" para="Developer" img={Person}/>
                            <Cards title="Steven Smith" para="Developer" img={Person}/>
                            <Cards title="Steven Smith" para="Developer" img={Person}/>
                        </div>
                        
                    </div>
                    <div className="team-1">
                        <div className="team-2">
                            <Cards title="Steven Smith" para="Developer" img={Person}/>
                            <Cards title="Steven Smith" para="Developer" img={Person}/>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    )
}
