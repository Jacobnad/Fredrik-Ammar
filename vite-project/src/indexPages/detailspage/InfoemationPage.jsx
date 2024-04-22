import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './moveinformation.css';
import Header from '../../components/logo/Logo';
import Footer from '../../components/back/Back';

function moveInformation() {
    const { id } = useParams();
    const [activeMovie, setActiveMovie] = useState({});

    useEffect(() => {
        axios.get(`http://www.omdbapi.com/?apikey=1a195302&i=${id}&plot=full`)
            .then(response => {
                setActiveMovie(response.data);
            });
    }, []);

    return (
        <div className="details-page-container">
            <Header />
            <div className="detail-info">
                <div className="movie-info">
                    <h2 className="movie-title">{activeMovie.Title}</h2>
                    <p className="imdb-rating">Imdb Rating: {activeMovie.imdbRating}</p>
                    <div className="poster-container">
                        <img src={activeMovie.Poster} alt={`Poster of the movie ${activeMovie.Title}`} className="movie-poster" />
                    </div>
                </div>
                <div className="plot-info">
                    <p className="plot">{activeMovie.Plot}</p>
                    <div className="additional-info">
                        <p className="bold">Actors:</p>
                        <p>{activeMovie.Actors}</p>
                        <p className="bold">Director:</p>
                        <p>{activeMovie.Director}</p>
                        <p className="bold">Genres:</p>
                        <p>{activeMovie.Genre}</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default moveInformation;
