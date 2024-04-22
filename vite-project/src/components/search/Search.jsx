import './search.css'
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useSearchStore from '../../js-folder/search';


function SearchSida() {
    const [input, setInput] = useState('');
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const navigate = useNavigate();
    const { movies } = useSearchStore();
    const setMovies = useSearchStore((state) => state.setMovies);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get(`http://www.omdbapi.com/?apikey=16ca3eb4&s=${input}`);
                setMovies(response.data.Search || []);
            } catch (error) {
                console.error('Error', error);
            }
        };

        if (input !== '') {
            fetchMovies();
        }
    }, [input]);

    const handleInputChange = (event) => {
        setInput(event.target.value);
        setDropdownOpen(true);
    };

    const handleMovieSelect = (movie) => {
        setInput(movie.Title);
        setDropdownOpen(false);
        navigate(`/detailsPage/${movie.imdbid}`);
    };

    const handleSearchButtonClick = (event) => {
        event.preventDefault()
        setDropdownOpen(false);
        navigate("/SearchPage/");
    };

    return (
        <form className='searchbar-container'>
            <div className="dropdown-container">
                {dropdownOpen && movies && movies.length > 0 && (
                    <div className="dropdown">
                        {movies.map((movie, index) => (
                            <div
                                key={index}
                                className="dropdown-item"
                                onClick={() => handleMovieSelect(movie)}
                            >
                                <span>{movie.title}</span>
                                {movie.poster && <img className='dropdown-moviePoster' src={movie.poster} alt="movie-poster" />}
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <input
                className='searchbar'
                type="text"
                placeholder="Search"
                value={input}
                onChange={handleInputChange}
            />
            <input className='searchbar-btn'
                type="submit"
                value="Sök"
                onClick={handleSearchButtonClick}
            />
        </form>
    )
}


export default SearchSida;
