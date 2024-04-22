import { create } from "zustand";

const useSearchStore = create((set) => {
  const initialState = {
    movies: [],
  };

  const setMovies = (newMovies) => {
    const transformedMovies = newMovies.map((movie) => {
      const lowerCasedMovie = Object.fromEntries(
        Object.entries(movie).map(([key, value]) => [
          key.toLowerCase(),
          value,
        ])
      );
      return lowerCasedMovie;
    });
    set({ movies: transformedMovies });
  };

  return { ...initialState, setMovies };
});

export default useSearchStore;

