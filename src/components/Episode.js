import React from 'react'
const Episode = ({id, title, description, thumbnail, audio, audioLength}) =>
    <div className="episode-wrapper mb-5">
        <div className="row">
            <div className="col-md-3">
                <img src={thumbnail}/>
            </div>
            <div className="col-md-9">
                <h2>{title}</h2>
                <div dangerouslySetInnerHTML={{ __html:description }}/>
                <p><i className="fa fa-play"/> <a href={audio}> {audio}</a></p>
                <p>{Math.floor(audioLength/60)} Mins</p>
            </div>
        </div>
    </div>


export default Episode
