import './CurrentTime.css'

function CurrentTime() {
    return (
        <div>
            <h3 className="current_time">Текущее время: {new Date().toLocaleTimeString()}</h3>
        </div>
    );
}

export default CurrentTime;
