import React, {Component} from 'react';

export default class Episode extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="episode-wrapper mb-5">
                <div className="row">
                    <div className="col-md-3">
                        <img src={this.props.thumbnail}/>
                    </div>
                    <div className="col-md-9">
                        <h2>{this.props.title}</h2>
                        <div dangerouslySetInnerHTML={{__html: this.props.description}}/>
                        <p>
                            <button className="fa fa-play"/>
                        </p>
                        <p>{Math.floor(this.props.audioLength / 60)} Mins</p>
                    </div>
                </div>
            </div>
        )
    }
}
//
// const Episode = ({id, title, description, thumbnail, audio, audioLength}) =>
//     <div className="episode-wrapper mb-5">
//         <div className="row">
//             <div className="col-md-3">
//                 <img src={thumbnail}/>
//             </div>
//             <div className="col-md-9">
//                 <h2>{title}</h2>
//                 <div dangerouslySetInnerHTML={{__html: description}}/>
//                 <p>
//                     <button className="fa fa-play" onClick={this.playAudio(audio)}/>
//                 </p>
//                 <p>{Math.floor(audioLength / 60)} Mins</p>
//             </div>
//         </div>
//     </div>;
//

