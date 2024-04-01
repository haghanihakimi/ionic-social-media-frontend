import React, { useEffect } from 'react';
import CreateGroupLayout from '../../layouts/create-group/CreateGroup';
import { useDispatch } from 'react-redux';
import { setRoute } from '../../server/store/reducers/route';
import { useLocation } from 'react-router';


const CreateGroup: React.FC = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setRoute(location.pathname))
  }, [location.pathname])


  return (
    <>
      <CreateGroupLayout />
    </>
  );
};

export default CreateGroup;
