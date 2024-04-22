import React from 'react';
import './trailer.css'

function Trailer({ movie, trailer, index }) {
    return (
        <div className="trailer-container">
            <div className="trailer-wrapper">
                <iframe
                    width="500"
                    height="300"
                    src={trailer}
                    title={movie.title}
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
}

export default Trailer;
