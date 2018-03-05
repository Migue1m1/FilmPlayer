import React, { Component } from 'react';
import axios from 'axios';
import VideoPlayer from './components/video.player';
import Notifications from './components/notifications';
import { API_URL, FILMS_URL } from './config';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    constructor() {
        super();
        this.state = {
            videos: [],
            currentVideo: ''
        };
    }

    putVideoList() {
        axios
            .get(API_URL)
            .then((response) => {
                this.setState((prevState, props) => {
                     return {
                                videos: response.data.films
                            }
                });
            });
    }

    putCurrentVideo() {
        axios
            .get(API_URL)
            .then((response) => {
                this.setState((prevState, props) => {
                    return {
                               currentVideo: FILMS_URL + '/' + response.data.films[0].title + '.mp4'
                           }
                });
            });
    }

    componentDidMount() {
        this.putVideoList();
        this.putCurrentVideo();
    }

    render() {
        return (
            <div className="App" >
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to FilmPlayer</h1>
                </header>
                <VideoPlayer
                      url = {this.state.currentVideo}
                      videos = {this.state.videos} />
                <Notifications onNotify={this.putVideoList.bind(this)} />
            </div>
        );
    }
}

export default App;
