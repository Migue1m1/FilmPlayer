import React, { Component } from 'react';
import VideoPlayer from './components/video.player';
import Notifications from './components/notifications';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to FilmPlayer</h1>
                </header>
                <p className="App-intro">
                  To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <VideoPlayer
                      url = 'http://192.168.1.106:2999/films/clips/clip-0.mp4' />
                <Notifications />
            </div>
        );
    }
}

export default App;
