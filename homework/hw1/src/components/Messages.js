import Message from "./Message";
import './Messages.css'

function Messages() {
    return (
        <div className='messages'>
            <h1>Messages</h1>
            <Message author='Misha' text='Hello! ;)' />
            <Message author='Petya' text='How are you?' />
            <Message author='Misha' text='I`m fine) and you?' />
            <Message author='Petya' text='I`m fine too ;)' />
        </div>
    );
}

export default Messages;