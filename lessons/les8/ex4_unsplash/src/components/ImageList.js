import React from 'react';
import './ImageList.css';

const ImageList = ({ images }) => {
    return (
        <div className="image-list">
            <h2>Image List</h2>
            {images.map(image => (
                <div key={image.id} className="image-item">
                    <img src={image.urls.small} alt={image.description} />
                    <div className="image-description">{image.description}</div>
                </div>
            ))}
        </div>
    );
};

export default ImageList;
