import React from 'react';
import MovieCard from '../card/Card';
import './homPag.css';

function MainSection({ array, mainTitle }) {
    return (
        <main className="custom-main-section">
            <h1 className="custom-main-title">{mainTitle.toUpperCase()}</h1>
            <div className="custom-card-container">
                {array.map(item => (
                    <MovieCard
                        title={item.title}
                        poster={item.poster}
                        filmToHandle={item}
                        key={item.imdbid}
                        imdbid={item.imdbid}
                    />
                ))}
            </div>
        </main>
    );
}

export default MainSection;
