import React from 'react';

export default function Cards({title,para,img}) {
    return (
        <div className="how-cards">
            <div className="how-card-img-cont">
                <img src={img} className="how-img"/>
            </div>
            <div className="how-card-title">
                {title}
            </div>
            <div className="how-card-para">
                {para}
            </div>
        </div>
    )
}
