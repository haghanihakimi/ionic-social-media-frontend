import React, { useEffect } from 'react';
import ProfileLayout from '../../layouts/profile/Profile';
import { useDispatch } from 'react-redux';
import { setRoute } from '../../server/store/reducers/route';
import { useLocation } from 'react-router';


const Profile: React.FC = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setRoute(location.pathname))
  }, [location.pathname])

  return (
    <>
      <ProfileLayout />
    </>
  );
};

export default Profile;
