import React, { useEffect } from 'react';
import SettingsLayout from '../../layouts/settings/Settings';
import { useDispatch } from 'react-redux';
import { setRoute } from '../../server/store/reducers/route';
import { useLocation } from 'react-router';


const Settings: React.FC = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setRoute(location.pathname))
  }, [location.pathname])

  return (
    <>
      <SettingsLayout />
    </>
  );
};

export default Settings;
