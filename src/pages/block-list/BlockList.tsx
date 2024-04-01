import React, { useEffect } from 'react';
import BlockListLayout from '../../layouts/block-list/BlockList';
import { useDispatch } from 'react-redux';
import { setRoute } from '../../server/store/reducers/route';
import { useLocation } from 'react-router';


const BlockList: React.FC = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setRoute(location.pathname))
  }, [location.pathname])

  return (
    <BlockListLayout />
  );
};

export default BlockList;
