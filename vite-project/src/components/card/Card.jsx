import "./card.css"
import useFavoriteStore from "../../js-folder/favorites";
import { Link } from 'react-router-dom';
import useWatchlistStore from "../../js-folder/watchlist";
import { useState } from "react";

function CustomMovieCard({ poster, title, filmToHandle, imdbid }) {
    const handleFavorite = useFavoriteStore((state) => state.handleFavorite);
    const handleFilmToWatch = useWatchlistStore((state) => state.handleFilmToWatch);
    const { favorites } = useFavoriteStore();
    const { watchlist } = useWatchlistStore();

    const alreadyFavorite = favorites.some(favorite=> favorite.imdbid === imdbid);
    const alreadyInWatchlist = watchlist.some(watchlistItem=> watchlistItem.imdbid === imdbid);

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const imageSrc = poster === "N/A" ? "/src/assets/no-picture-found.jpg" : poster;

    return (
        <Link to={`/detailspage/${imdbid}`}>
            <figure className="custom-movie-card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <figcaption className="custom-movie-card__title">{title}</figcaption>
                <button title="Handle favorite." aria-label="Handle favorite button" className={`custom-movie-card__icon ${isHovered ? "" : "d-none"} ${alreadyFavorite ? "custom-movie-card__icon--in-favorites" : "custom-movie-card__icon--add-to-favorites"}`} onClick={(event) => handleFavorite(filmToHandle, event)}></button>
                <button title="Handle watchlist." aria-label="Handle watchlist button" className={`custom-movie-card__icon ${isHovered ? "" : "d-none"} ${alreadyInWatchlist ? "custom-movie-card__icon--in-watchlist" : "custom-movie-card__icon--add-to-watchlist"}`} onClick={(event) => handleFilmToWatch(filmToHandle, event)}></button>
                <img src={imageSrc} alt={`Poster of the movie ${title}`} className="custom-movie-card__poster" />
            </figure>
        </Link>
    )
}

export default CustomMovieCard;
