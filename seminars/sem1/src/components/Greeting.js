function Greeting() {
    const currentHour = new Date().getHours();
    const greeting = currentHour < 12 ? 'Доброе утро' : 'Добрый вечер';
    return (
        <div>
            <h1>{greeting}, React!</h1>
        </div>
    );
}

export default Greeting;

