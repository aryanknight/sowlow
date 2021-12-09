import React from 'react';

export default function Cards({para,img}) {
    return (
        <div className="features-cards">
            <div className="features-card-img-cont">
                <img src={img} className="features-img"/>
            </div>
            <div className="features-card-para">
                {para}
            </div>
        </div>
    )
}
