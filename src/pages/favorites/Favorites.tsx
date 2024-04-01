import React, { useEffect } from 'react';
import FavoritesLayout from '../../layouts/favorites/Favorites';
import { useDispatch } from 'react-redux';
import { setRoute } from '../../server/store/reducers/route';
import { useLocation } from 'react-router';


const Favorites: React.FC = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setRoute(location.pathname))
  }, [location.pathname])

  return (
    <FavoritesLayout />
  );
};

export default Favorites;
