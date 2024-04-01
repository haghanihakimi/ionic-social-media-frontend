import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setRoute } from '../../server/store/reducers/route';
import { useLocation } from 'react-router';
import GroupChatAdminConsoleLayout from '../../layouts/group-chat-admin-console/GroupChatAdminConsole';

const GroupChatAdminConsole: React.FC = () => {
    const dispatch = useDispatch();
    const location = useLocation();

    useEffect(() => {
      dispatch(setRoute(location.pathname))
    }, [location.pathname]);


    return (
        <>
            <GroupChatAdminConsoleLayout />
        </>
    );
};

export default GroupChatAdminConsole;
