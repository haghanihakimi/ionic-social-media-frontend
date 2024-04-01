import React, { useEffect } from 'react';
import MessagesLayout from '../../layouts/messages/Messages';
import { useDispatch } from 'react-redux';
import { setRoute } from '../../server/store/reducers/route';
import { useLocation } from 'react-router';


const Messages: React.FC = () => {
    const dispatch = useDispatch();
    const location = useLocation();

    useEffect(() => {
        dispatch(setRoute(location.pathname))
    }, [location.pathname])

    return (
        <>
            <MessagesLayout />
        </>
    );
};

export default Messages;
