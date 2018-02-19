import React, { Component } from 'react';
import '../styles/video.item.css';

class VideoItem extends Component {
    render() {
        return(
            <li>
                <a>
                    <span className="video-thumb" >
                    </span>
                    <div className="desc" >
                        {this.props.title}
                    </div>
                </a>
            </li>
        );
    }
}

export default VideoItem;