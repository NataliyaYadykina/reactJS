import React from 'react';
import offersData from '../../data/Offers.json'; // импортируем данные из JSON файла

const Offers = () => {
    // Преобразуем объект с предложениями из JSON в массив объектов
    const offersArray = Object.keys(offersData.Offers).map(key => ({
        title: key,
        link: offersData.Offers[key].link,
        describe: offersData.Offers[key].describe
    }));

    return (
        <section className="offer center">
            {offersArray.map((offer, index) => (
                <div key={index + 1} className={`offer__item ${offer.title === 'ACCESORIES' ? 'offer__item-bottom' : `offer__item-${index + 1}`}`}>
                    <a href={offer.link} className="offer__item__link">
                        <p className="offer__item__subtitle">
                            {offer.describe}
                        </p>
                        <h4 className="offer__item__title">
                            {offer.title}
                        </h4>
                    </a>
                </div>
            ))}
        </section>
    );
}

export default Offers;
