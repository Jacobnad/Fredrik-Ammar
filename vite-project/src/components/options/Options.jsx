import { Link } from 'react-router-dom';
import FavoritesPage from '../../indexPages/favoritesPage/FavoritesPage';
import WatchListPage from '../../indexPages/watchListPage/WatchListPage';
import './options.css';

function Nav() {
    return (
        <>
            <nav>
                <Link className='nav-item' to="/FavoritesPage">favoritlist</Link>
                <Link className='nav-item' to="/WatchList"> watchlist</Link>
            </nav>
        </>
    );
}

export default Nav;
