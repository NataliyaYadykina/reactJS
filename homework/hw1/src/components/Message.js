import './Message.css'

function Message({ author, text }) {
    return (
        <div className='text'>
            <span className='author'>{author}</span>:<br></br>
            <span>- {text}</span>
        </div>
    );
}

export default Message;