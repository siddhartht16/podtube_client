import React from 'react'
const Episode = ({id, title, description, thumbnail, audio, audioLength}) =>
    <div>
        <h4 className="mt-5">{title}</h4>
        <div className="row mb-5">
            <div className="col-md-3">
                <img src={thumbnail}></img>
            </div>
            <div className="col-md-9">
                <div dangerouslySetInnerHTML={{ __html:description }}></div>
                <p><i className="fa fa-play"></i> <a href={audio}> {audio}</a></p>
                <p>{Math.floor(audioLength/60)} Mins</p>

            </div>
        </div>
    </div>


export default Episode
