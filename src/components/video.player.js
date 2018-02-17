import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import '../styles/video-player.css';

class VideoPlayer extends Component {
    render() {
        return (
            <div className="player-wrapper" >
                <ReactPlayer
                    className="react-player"
                    playing={false} 
                    controls 
                    url={this.props.url}
                    width='100%'
                    height='100%'
                />
            </div>
        );
    }
}

export default VideoPlayer;