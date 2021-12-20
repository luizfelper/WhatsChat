import React, {useState} from "react";
import './NewChat.css';
import  ArrowBackIcon from "@material-ui/icons/ArrowBack";

export default ({user, chatlist, show, setShow}) => {

    const handleClose = () => {
        setShow(false);
    }

    const [list, setList] = useState([
        {id: 123, avatar: 'https://www.w3schools.com/w3images/avatar2.png', name: 'Luiz Felipe'},
        {id: 123, avatar: 'https://www.w3schools.com/w3images/avatar2.png', name: 'Luiz Felipe'},
        {id: 123, avatar: 'https://www.w3schools.com/w3images/avatar2.png', name: 'Luiz Felipe'},
        {id: 123, avatar: 'https://www.w3schools.com/w3images/avatar2.png', name: 'Luiz Felipe'},
    ]);
    return(
        <div className="newChat" style={{left: show? 0 : -415}}>
            <div className="newChat--header">
                <div onClick={handleClose} className="newChat--backbutton">
                    <ArrowBackIcon style={{color: '#fff'}} />
                </div>
                <div className="newChat--headtitle">
                    Nova conversa
                </div>
            </div>
            <div className="newChat--list">
                {list.map((item, key) => (
                    <div className="newChat--item" key={key}>
                        <img  className="newChat--item--avatar"src={item.avatar} alt=""></img>
                        <div className="newChat--item--name">{item.name}</div>
                    </div>

                ))}
            </div>
        </div>
    )
}