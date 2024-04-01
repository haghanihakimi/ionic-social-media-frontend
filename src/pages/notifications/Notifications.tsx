import React, { useEffect } from 'react';
import NotificationsLayout from '../../layouts/notifications/Notifications';
import { useDispatch } from 'react-redux';
import { setRoute } from '../../server/store/reducers/route';
import { useLocation } from 'react-router';


const Notifications: React.FC = () => {
    const location = useLocation();
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(setRoute(location.pathname))
    }, [location.pathname])

    return (
        <>
            <NotificationsLayout />
        </>
    );
};

export default Notifications;
