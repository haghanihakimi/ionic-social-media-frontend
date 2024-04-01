import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setRoute } from '../../server/store/reducers/route';
import ChatLayout from '../../layouts/chat/Chat';
import { useLocation } from 'react-router';

const Chat: React.FC = () => {
    const dispatch = useDispatch();
    const location = useLocation();
  
    useEffect(() => {
        
      dispatch(setRoute(location.pathname))
    }, [location.pathname])

    return (
        <>
            <ChatLayout />
        </>
    );
};

export default Chat;
