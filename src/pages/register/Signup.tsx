import React, { useEffect } from 'react';
import SignupLayout from '../../layouts/signup/Signup';
import { useDispatch } from 'react-redux';
import { setRoute } from '../../server/store/reducers/route';
import { useLocation } from 'react-router';

const Signup: React.FC = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setRoute(location.pathname))
  }, [location.pathname])


  return (
    <>
      <SignupLayout />
    </>
  );
};

export default Signup;
