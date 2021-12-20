import React, {useState, useEffect, useRef} from "react";
import EmojiPicker from "emoji-picker-react";
import './ChatWindow.css';
import MessageItem from "./MessageItem";

import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import CloseIcon from '@material-ui/icons/Close';
import SendIcon from '@material-ui/icons/Send';
import MicIcon from '@material-ui/icons/Mic';

export default ({user}) => {

    const body = useRef();

    let recognition = null;
    let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition
    if (SpeechRecognition !== undefined) {
        recognition = new SpeechRecognition();
    }

    const [emojiOpen, setEmojiOpen] = useState(false);
    const [text, setText] = useState('');
    const [listening, setListening] = useState(false);
    const [list, setList] = useState([
        {author: 123, body: 'bla bla bla bla'},
        {author: 123, body: 'bla bla bla'},
        {author: 1234, body: 'bla bla'},
        {author: 123, body: 'bla bla bla bla'},
        {author: 123, body: 'bla bla bla'},
        {author: 1234, body: 'bla bla'},
        {author: 123, body: 'bla bla bla bla'},
        {author: 123, body: 'bla bla bla'},
        {author: 1234, body: 'bla bla'},
        {author: 123, body: 'bla bla bla bla'},
        {author: 123, body: 'bla bla bla'},
        {author: 1234, body: 'bla bla'},
        {author: 1234, body: 'bla bla'},
        {author: 123, body: 'bla bla bla bla'},
        {author: 123, body: 'bla bla bla'},
        {author: 1234, body: 'bla bla'},
    ]);

    useEffect(() => {
        if(body.current.scrollHeight > body.current.offsetHeight) { //Se tamanho do Scroll for maior que o tamanho da tela
            body.current.scrollTop = body.current.scrollHeight - body.current.offsetHeight; // Coloca no scrollTop o tamanho do scroll menos tamanho da tela
        }
    }, [list])

    const handleEmojiClick = (e, emojiObject) => {
        setText(text + emojiObject.emoji);
    }
    const handleOpenEmoji = () => {
        setEmojiOpen(true);
    }
    const handleCloseEmoji = () => {
        setEmojiOpen(false);
    }

    const handleSendClick = () => {}
    const handleMicClick = () => {
        if(recognition !== null) {
            recognition.onstart = () => {
                setListening(true);
            }
            recognition.onend = () => {
                setListening(false);
            }
            recognition.onresult = (event) => {
                setText(event.results[0][0].transcript);
            }

            recognition.start();
        }
    }

    return (
        <div className="chatWindow">
            <div className="chatWindow--header">
                <div className="chatWindow--headerinfo">
                    <img className="chatWindow--avatar" src="https://www.w3schools.com/w3images/avatar2.png" alt=""></img>
                    <div className="chatWindow--name">Felipe Fontenele</div>
                </div>

                <div className="chatWindow--headerbuttons">
                    <div className="chatWindow--btn">
                        <SearchIcon style={{ color: '#919191' }}/>
                    </div>
                    <div className="chatWindow--btn">
                        <AttachFileIcon style={{ color: '#919191' }}/>
                    </div>
                    <div className="chatWindow--btn">
                        <MoreVertIcon style={{ color: '#919191' }}/>
                    </div>
                </div>

            </div>
            <div ref={body} className="chatWindow--body">
                {list.map((item, key) => (
                    <MessageItem
                        key={key}
                        data={item}
                        user={user}
                    />
                ))}
            </div>

            <div className="chatWindow--emojiarea"
            style={{height: emojiOpen ? '200px' : '0px'}}>
                <EmojiPicker
                    onEmojiClick={handleEmojiClick}
                    disableSearchBar={true}
                    disableSkinTones={true}
                />
            </div>

            <div className="chatWindow--footer">
                <div className="chatWindow--pre">
                    <div
                        className="chatWindow--btn"
                        onClick={handleCloseEmoji}
                        style={{width: emojiOpen ? '40px' : '0px'}}
                    >
                        <CloseIcon style={{ color: '#919191' }}/>
                    </div>
                    <div
                        className="chatWindow--btn"
                        onClick={handleOpenEmoji}
                    >
                        <InsertEmoticonIcon style={{ color: emojiOpen? '#009688' : '#919191' }}/>
                    </div>
                </div>
                <div className="chatWindow--inputarea">
                    <input
                    className="chatWindow--input"
                    type="text"
                    placeholder="Digite uma mensagem..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    />
                </div>
                <div className="chatWindow--pos">
                    {text === '' &&
                        <div className="chatWindow--btn" onClick={handleMicClick}>
                            <MicIcon style={{ color: listening ? '#126ece' : '#919191' }}/>
                        </div>
                    }
                    {text !== '' &&
                        <div className="chatWindow--btn" onClick={handleSendClick}>
                            <SendIcon style={{ color: '#919191' }}/>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

