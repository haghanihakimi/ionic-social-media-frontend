import React, { useEffect } from 'react';
import ViewPostLayout from '../../layouts/view-post/ViewPost';
import { useDispatch } from 'react-redux';
import { setRoute } from '../../server/store/reducers/route';
import { useLocation } from 'react-router';


const ViewPost: React.FC = () => {
    const location = useLocation();
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(setRoute(location.pathname))
    }, [location.pathname])

    return (
        <>
            <ViewPostLayout />
        </>
    );
};

export default ViewPost;
