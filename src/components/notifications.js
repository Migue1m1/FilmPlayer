import React, { Component } from 'react';
import Pusher from 'pusher-js';
import { ToastContainer, toast } from 'react-toastify';
import { css } from 'glamor';

Pusher.logToConsole = true;

class Notifications extends Component {
    notify = (text) => toast.info(text, {
            position: toast.POSITION.TOP_RIGHT, 
            autoClose: 4000,
            className: css({
                transform: "rotateY(360deg)",
                transition: "transform 0.6s"
            })
        });

    componentDidMount() {
        const pusher = new Pusher('1648f8446a947e8be0c6', {
            cluster: 'us2',
            encrypted: true
        });
    
        const channel = pusher.subscribe('FilmPlayer');
        channel.bind('Notification', data => {
            this.notify(data.message);
            
        });
    }

    render() {
        return (
            <ToastContainer />
        );
    }
}

export default Notifications;