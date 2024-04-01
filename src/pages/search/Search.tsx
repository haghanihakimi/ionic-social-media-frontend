import React, { useEffect } from 'react';
import SearchLayout from '../../layouts/serach/Search';
import { useDispatch } from 'react-redux';
import { setRoute } from '../../server/store/reducers/route';
import { useLocation } from 'react-router';

const Search: React.FC = () => {
    const location = useLocation();
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(setRoute(location.pathname))
    }, [location.pathname])

    return (
        <>
            <SearchLayout />
        </>
    );
};

export default Search;
