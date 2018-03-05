import React, { Component } from 'react';
import '../styles/video.item.css';

class VideoItem extends Component {
    render() {
        const { title } = this.props;

        return(
            <li onClick={() => this.props.onClicked(title)} >
                <a>
                    <span className="video-thumb" >
                    </span>
                    <div className="desc" >
                        {title}
                    </div>
                </a>
            </li>
        );
    }
}

export default VideoItem;