import React, { useEffect } from 'react';
import CreateEventLayout from '../../layouts/create-event/CreateEvent';
import { useDispatch } from 'react-redux';
import { setRoute } from '../../server/store/reducers/route';
import { useLocation } from 'react-router';


const CreateEvent: React.FC = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setRoute(location.pathname))
  }, [location.pathname])

  return (
    <>
      <CreateEventLayout />
    </>
  );
};

export default CreateEvent;
