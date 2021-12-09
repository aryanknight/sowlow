import React from 'react';

export default function Cards({title,para,img}) {
    return (
        <div className="team-cards">
            <div className="team-card-img-cont">
                <img src={img} className="team-img"/>
            </div>
            <div className="team-card-title">
                {title}
            </div>
            <div className="team-card-para">
                {para}
            </div>
        </div>
    )
}