import React, { useEffect } from 'react';
import UserProfileLayout from '../../layouts/user-profile/UserProfile';
import { useDispatch } from 'react-redux';
import { setRoute } from '../../server/store/reducers/route';
import { useLocation } from 'react-router';


const Profile: React.FC = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(setRoute(location.pathname))
  }, [location.pathname])

  return (
    <>
      <UserProfileLayout />
    </>
  );
};

export default Profile;
