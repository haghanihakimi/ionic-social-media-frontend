import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setRoute } from '../../server/store/reducers/route';
import { useLocation } from 'react-router';
import HomeLayout from '../../layouts/home/home';

const Home: React.FC = () => {
    const dispatch = useDispatch();
    const location = useLocation();

    useEffect(() => {
      dispatch(setRoute(location.pathname))
    }, [location.pathname]);


    return (
        <>
            <HomeLayout />
        </>
    );
};

export default Home;
