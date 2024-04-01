import React, { useEffect } from 'react';
import GroupsLayout from '../../layouts/groups/Groups';
import { useDispatch } from 'react-redux';
import { setRoute } from '../../server/store/reducers/route';
import { useLocation } from 'react-router';


const Groups: React.FC = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setRoute(location.pathname))
  }, [location.pathname])

  return (
    <GroupsLayout />
  );
};

export default Groups;
