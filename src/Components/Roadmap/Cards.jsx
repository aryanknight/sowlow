import React from 'react'

export default function Cards({title,para,img}) {
    return (
        <div className="roadmap-cards">
            <div className="roadmap-card-title">
                {title}
            </div>
            <div className="roadmap-card-img-cont">
                <img src={img} className="roadmap-img"/>
            </div>
            <div className="roadmap-card-para">
                {para}
            </div>
        </div>
    )
}
