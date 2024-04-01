import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setRoute } from '../../server/store/reducers/route';
import { useLocation } from 'react-router';
import GroupChatMediaLayout from '../../layouts/group-chat-media/GroupChatMedia';

const GroupChatMedia: React.FC = () => {
    const dispatch = useDispatch();
    const location = useLocation();

    useEffect(() => {
      dispatch(setRoute(location.pathname))
    }, [location.pathname]);


    return (
        <>
            <GroupChatMediaLayout />
        </>
    );
};

export default GroupChatMedia;
