import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import VideoList from './video.list';
import '../styles/video.player.css';

class VideoPlayer extends Component {
    render() {

        return (
            <div className="video-player-wrapper" >
                <div className="video-container">
                    <ReactPlayer
                        className="react-player-video"
                        playing={false} 
                        controls 
                        url={this.props.url}
                        width='100%'
                        height='500px'
                    />
                </div>
                <VideoList videos={this.props.videos} />
            </div>
        );
    }
}

export default VideoPlayer;