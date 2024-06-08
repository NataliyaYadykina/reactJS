import './EventCard.css'

function EventCard({ title, date, place }) {
    return (
        <div>
            <div className='card_wrap'>
                <h2 className='card__title'>{title}</h2>
                <p className='card__date'>{date}</p>
                <p className='card__place'>{place}</p>
            </div>
        </div>
    );
}

export default EventCard;