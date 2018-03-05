import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import VideoList from './video.list';
import { FILMS_URL } from '../config';
import '../styles/video.player.css';

class VideoPlayer extends Component {

    constructor(props) {
        super(props);
        this.state = { currentVideo: '' };
    }

    setCurrentVideo(name) {
        this.setState(prevState => {
            return { currentVideo: FILMS_URL + '/' + name + '.mp4' };
        });
    }

    componentWillReceiveProps(props) {
        this.setState(prevState => { 
            return { currentVideo: props.url }
        });
    }

    render() {

        return (
            <div className="video-player-wrapper" >
                <div className="video-container">
                    <ReactPlayer
                        className="react-player-video"
                        playing={false} 
                        controls 
                        url={this.state.currentVideo}
                        width='100%'
                        height='500px'
                    />
                </div>
                <VideoList videos={this.props.videos} onCurrentVideo={this.setCurrentVideo.bind(this)} />
            </div>
        );
    }
}

export default VideoPlayer;