import React from 'react';
import slide1 from '../../img/slide1.jpg'

const Carousel = () => {
    return (
        <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={slide1} className="d-block" alt="slide1" />
                </div>
                <div className="carousel-item">
                    <img src={slide1} className="d-block" alt="slide1" />
                </div>
                <div className="carousel-item">
                    <img src={slide1} className="d-block" alt="slide1" />
                </div>
            </div>
            <button className="carousel-control carousel-control-prev" type="button" data-bs-target="#carouselExample"
                data-bs-slide="prev">
                <span className="carousel-control-icon carousel-control-prev-icon" aria-hidden="true">
                    <svg width="13" height="23" viewBox="0 0 13 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12.7 3.7499L4.95005 11.4999L12.7 19.2499L11.15 22.3499L0.300049 11.4999L11.15 0.649902L12.7 3.7499Z"
                            fill="black" />
                    </svg>
                </span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control carousel-control-next" type="button" data-bs-target="#carouselExample"
                data-bs-slide="next">
                <span className="carousel-control-icon carousel-control-next-icon" aria-hidden="true">
                    <svg width="13" height="23" viewBox="0 0 13 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12.7 3.7499L4.95005 11.4999L12.7 19.2499L11.15 22.3499L0.300049 11.4999L11.15 0.649902L12.7 3.7499Z"
                            fill="black" />
                    </svg>
                </span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default Carousel;
