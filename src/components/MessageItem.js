import { DashboardTwoTone } from '@material-ui/icons';
import React from 'react';
import MessageItem from './MessageItem.css'

export default ({data, user}) => {
    return(
        <div
        className="MessageLine"
        style={{justifyContent: user.id === data.author ? 'flex-end' : 'flex-start'}}
        >
            <div className="MessageItem"
                style={{backgroundColor: user.id === data.author ? '#DCF8C6' : '#FFF'}}
            >
                <div className="MessageItem--text">{data.body}</div>
                <div className="MessageItem--date">09:17</div>
            </div>
        </div>
    )
}