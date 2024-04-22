import { useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import StartPage from "./indexPages/startPage/Start";
import FavoritesPage from './indexPages/favoritesPage/FavoritesPage';
import WatchListPage from './indexPages/watchListPage/WatchListPage';
import InformationPage from "./indexPages/detailspage/InfoemationPage";
import SearchPage from "./indexPages/searchPage/SearchPage";
import useFavoriteStore from "./js-folder/favorites";
import useWatchlistStore from "./js-folder/watchlist";

function App() {
  const { setFavorites } = useFavoriteStore();
  const { setWatchlist } = useWatchlistStore();

  useEffect(() => {
    const savedFavorites = localStorage.getItem("favorites");
    const savedWatchlist = localStorage.getItem("watchlist");

    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }

    if (savedWatchlist) {
      setWatchlist(JSON.parse(savedWatchlist));
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="/FavoritesPage" element={<FavoritesPage />} />
      <Route path="/WatchList" element={<WatchListPage />} />
      <Route path="/detailspage/:id" element={<InformationPage />} />
      <Route path="/SearchPage/" element={<SearchPage />} />
    </Routes>
  );
}

export default App;
