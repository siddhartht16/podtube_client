import React from 'react'
const Episode = ({id, title, description, thumbnail}) =>
    <div>
        <h4 className="mt-5">{title}</h4>
        <div className="row mb-5">
            <div className="col-md-3">
                <img src={thumbnail}></img>
            </div>
            <div className="col-md-9">
                {description}
            </div>
        </div>
    </div>


export default Episode
