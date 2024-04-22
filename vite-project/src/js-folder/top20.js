import { create } from "zustand";

const useTop20Store = create((set) => {
  const initialState = {
    top20: [],
    fiveMovies: [],
  };

  const addTop20 = (newTop20) => {
    set((state) => ({
      ...state,
      top20: newTop20,
    }));
  };

  const addFiveMovies = (newFiveMovies) => {
    set((state) => ({
      ...state,
      fiveMovies: newFiveMovies,
    }));
  };

  return { ...initialState, addTop20, addFiveMovies };
});

export default useTop20Store;
