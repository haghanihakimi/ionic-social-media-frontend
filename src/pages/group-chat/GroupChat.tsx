import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setRoute } from '../../server/store/reducers/route';
import GroupChatLayout from '../../layouts/group-chat/GroupChat';
import { useLocation } from 'react-router';

const GroupChat: React.FC = () => {
    const dispatch = useDispatch();
    const location = useLocation();

    useEffect(() => {
      dispatch(setRoute(location.pathname))
    }, [location.pathname]);


    return (
        <>
            <GroupChatLayout />
        </>
    );
};

export default GroupChat;
