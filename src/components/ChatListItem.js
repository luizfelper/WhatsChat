import React from "react";
import './ChatListItem.css';

export default ({onClick}) => {
    return (
        <div 
            className="chatListItem"
            onClick={onClick}
        >
            <img className="chatListItem--avatar" src="https://www.w3schools.com/w3images/avatar2.png" alt="" />
            <div className="chatListItem--lines">
                <div className="chatListItem--line">
                    <div className="chatListItem--name">Luiz Felipe</div>
                    <div className="chatListItem--date">16:53</div>
                </div>
                <div className="chatListItem--line">
                    <div className="chatListItem--lastMsg">
                        <p>Iae, beleza?Iae, beleza?Iae, beleza?</p>
                    </div>
                </div>
            </div>
        </div>
    )
}