import React, { createContext, useContext, useState } from 'react';

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem('favorites')) || []
  );

  const [itemStates, setItemStates] = useState(
    JSON.parse(localStorage.getItem('itemStates')) || {}
  );

  const isItemInFavorites = item => {
    return favorites.some(favorite => favorite.id === item.id);
  };

  const toggleFavorite = item => {
    if (!isItemInFavorites(item)) {
      const updatedFavorites = [...favorites, item];
      setFavorites(updatedFavorites);
      const updatedItemStates = { ...itemStates, [item.id]: true };
      setItemStates(updatedItemStates);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      localStorage.setItem('itemStates', JSON.stringify(updatedItemStates));
    } else {
      const updatedFavorites = favorites.filter(
        favorite => favorite.id !== item.id
      );
      setFavorites(updatedFavorites);
      const updatedItemStates = { ...itemStates, [item.id]: false };
      setItemStates(updatedItemStates);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      localStorage.setItem('itemStates', JSON.stringify(updatedItemStates));
    }
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        toggleFavorite,
        isItemInFavorites,
        itemStates,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  return useContext(FavoritesContext);
};
