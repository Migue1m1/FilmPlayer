import React, { Component } from 'react';
import axios from 'axios';
import VideoPlayer from './components/video.player';
import Notifications from './components/notifications';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    constructor() {
        super();
        this.state = {
            videos: []
        };
    }

    putVideoList() {
        axios
            .get('http://192.168.2.103:2999/api/films')
            .then((response) => {
                this.setState((prevState, props) => {
                     return { videos: response.data.films }
                });
            });
    }

    componentDidMount() {
        this.putVideoList();
    }

    render() {
        return (
            <div className="App" >
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to FilmPlayer</h1>
                </header>
                <VideoPlayer
                      url = 'http://192.168.2.103:2999/films/clips/clip-0.mp4'
                      videos = {this.state.videos} />
                <Notifications onNotify={this.putVideoList.bind(this)} />
            </div>
        );
    }
}

export default App;
