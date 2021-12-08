import React from 'react';

export default function Cards({title,para}) {
    return (
        <div className="cards">
            <div className="card-title">
                {title}
            </div>
            <div className="card-para">
                {para}
            </div>
        </div>
    )
}
