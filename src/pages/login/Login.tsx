import React, { useEffect } from 'react';
import LoginLayout from '../../layouts/login/Login';
import { useDispatch } from 'react-redux';
import { setRoute } from '../../server/store/reducers/route';
import { useLocation } from 'react-router';


const Login: React.FC = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(setRoute(location.pathname))
  }, [location.pathname])

  return (
    <>
      <LoginLayout />
    </>
  );
};

export default Login;
