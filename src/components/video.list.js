import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import VideoItem from './video.item';
import '../styles/video.list.css';

class VideoList extends Component {

    componentDidMount () {

    }

    render() {

        let videos = this.props.videos;

        let videoList = videos.length === 0? <a/>
            : videos.map((video, index) =>
                <VideoItem
                    key={index}
                    title={video.title} />
        );

        return(
            <div className="video-list-container" >
                <Scrollbars
                    style={{height: 500}}
                    autoHide
                    autoHideTimeout={1000}
                    autoHideDuration={200}
                    universal={true} 
                    renderThumbVertical={props => 
                        <div 
                            {...props} 
                            style={{backgroundColor:'#3A3A3A'}} />}>
                    <ol id="video-list">
                        { videoList }
                    </ol>
                </Scrollbars>
            </div>
        );
    }
}

export default VideoList;