import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setRoute } from '../../server/store/reducers/route';
import ChatGroupMemberListLayout from '../../layouts/chat-group-members-list/ChatGroupMemberList';
import { useLocation } from 'react-router';


const ChatGroupMembersList: React.FC = () => {
    const location = useLocation();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setRoute(location.pathname))
    }, [location.pathname])

    return (
        <>
            <ChatGroupMemberListLayout />
        </>
    );
};

export default ChatGroupMembersList;
