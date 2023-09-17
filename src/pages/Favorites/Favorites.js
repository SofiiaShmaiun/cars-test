import React from 'react';
import { useFavorites } from '../../FavoriteContext';
import CardsList from 'components/CardsList/CardsList';

export default function Favorites() {
  const { favorites } = useFavorites();
  return <CardsList adverts={favorites} currentPage={1000} />;
}
